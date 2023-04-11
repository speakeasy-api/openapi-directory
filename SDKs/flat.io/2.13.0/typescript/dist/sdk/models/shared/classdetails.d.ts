import { SpeakeasyBase } from "../../../internal/utils";
import { ClassStateEnum } from "./classstateenum";
import { GroupDetails } from "./groupdetails";
/**
 * Meta information provided by Canvs LMS
 */
export declare class ClassDetailsCanvas extends SpeakeasyBase {
    /**
     * Canvas instance domain (e.g. "canvas.instructure.com")
     */
    domain?: string;
    /**
     * Unique identifier of the course on Canvas
     */
    id?: string;
}
/**
 * Normalized subject of the course
 */
export declare enum ClassDetailsCleverSubjectEnum {
    EnglishLanguageArts = "english/language arts",
    Math = "math",
    Science = "science",
    SocialStudies = "social studies",
    Language = "language",
    HomeroomAdvisory = "homeroom/advisory",
    InterventionsOnlineLearning = "interventions/online learning",
    TechnologyAndEngineering = "technology and engineering",
    PEAndHealth = "PE and health",
    ArtsAndMusic = "arts and music",
    Other = "other"
}
/**
 * Clever.com section-related information
 */
export declare class ClassDetailsClever extends SpeakeasyBase {
    /**
     * The creation date of the section on clever
     */
    creationDate?: Date;
    /**
     * Clever section unique identifier
     */
    id?: string;
    /**
     * The last modification date of the section on clever
     */
    modificationDate?: Date;
    /**
     * Normalized subject of the course
     */
    subject?: ClassDetailsCleverSubjectEnum;
    /**
     * End date of the term
     */
    termEndDate?: Date;
    /**
     * Name of the term when this course happens
     */
    termName?: string;
    /**
     * Beginning date of the term
     */
    termStartDate?: Date;
}
/**
 * Google Classroom course-related information
 */
export declare class ClassDetailsGoogleClassroom extends SpeakeasyBase {
    /**
     * Absolute link to this course in the Classroom web UI
     */
    alternateLink?: string;
    /**
     * The course identifier on Google Classroom
     */
    id?: string;
}
/**
 * Google Drive course-related information provided by Google Classroom
 */
export declare class ClassDetailsGoogleDrive extends SpeakeasyBase {
    /**
     * [Teachers only] The Drive URL of the teachers' folder
     *
     * @remarks
     *
     */
    teacherFolderAlternateLink?: string;
    /**
     * [Teachers only] The Drive directory identifier of the teachers' folder
     *
     * @remarks
     *
     */
    teacherFolderId?: string;
}
/**
 * The reason why the account cannot be synced
 */
export declare enum ClassDetailsIssuesSyncReasonEnum {
    OtherOrgnanization = "otherOrgnanization",
    PersonalSubscription = "personalSubscription"
}
/**
 * A sync issue
 */
export declare class ClassDetailsIssuesSync extends SpeakeasyBase {
    /**
     * The email address of the user concerned by this sync issue
     */
    email?: string;
    /**
     * The account user identifier
     */
    id?: string;
    /**
     * The reason why the account cannot be synced
     */
    reason?: ClassDetailsIssuesSyncReasonEnum;
}
/**
 * Detected issues for this class
 */
export declare class ClassDetailsIssues extends SpeakeasyBase {
    /**
     * Synchronization issues for the class
     */
    sync?: ClassDetailsIssuesSync[];
}
/**
 * Meta information provided by the LTI consumer
 */
export declare class ClassDetailsLti extends SpeakeasyBase {
    /**
     * Unique context identifier provided
     */
    contextId?: string;
    /**
     * Context label
     */
    contextLabel?: string;
    /**
     * Context title
     */
    contextTitle?: string;
}
/**
 * Meta information provided by Canvs LMS
 */
export declare class ClassDetailsMfc extends SpeakeasyBase {
    /**
     * Link to MusicFirst Classroom class
     */
    alternateLink?: string;
    /**
     * Unique identifier of the course on MusicFirst Classroom
     */
    id?: string;
}
export declare class ClassDetailsMicrosoftGraph extends SpeakeasyBase {
    /**
     * The course identifier on Microsoft Graph
     */
    id?: string;
}
/**
 * A classroom
 */
export declare class ClassDetails extends SpeakeasyBase {
    /**
     * The number of assignments created in the class
     */
    assignmentsCount?: number;
    /**
     * Meta information provided by Canvs LMS
     */
    canvas?: ClassDetailsCanvas;
    /**
     * Clever.com section-related information
     */
    clever?: ClassDetailsClever;
    /**
     * The date when the class was create
     */
    creationDate?: Date;
    /**
     * An optionnal description for this class
     */
    description?: string;
    /**
     * [Teachers only] The enrollment code that can be used by the students to join the class
     *
     * @remarks
     *
     */
    enrollmentCode?: string;
    /**
     * Google Classroom course-related information
     */
    googleClassroom?: ClassDetailsGoogleClassroom;
    /**
     * Google Drive course-related information provided by Google Classroom
     */
    googleDrive?: ClassDetailsGoogleDrive;
    /**
     * The unique identifier of the class
     */
    id?: string;
    /**
     * Detected issues for this class
     */
    issues?: ClassDetailsIssues;
    /**
     * Meta information provided by the LTI consumer
     */
    lti?: ClassDetailsLti;
    /**
     * Meta information provided by Canvs LMS
     */
    mfc?: ClassDetailsMfc;
    microsoftGraph?: ClassDetailsMicrosoftGraph;
    /**
     * The name of the class
     */
    name?: string;
    /**
     * The unique identifier of the Organization owning this class
     */
    organization?: string;
    /**
     * The unique identifier of the User owning this class
     */
    owner?: string;
    /**
     * The section of the class
     */
    section?: string;
    /**
     * The state of a classroom
     */
    state?: ClassStateEnum;
    /**
     * The details of a group
     */
    studentsGroup?: GroupDetails;
    /**
     * The details of a group
     */
    teachersGroup?: GroupDetails;
    /**
     * The theme identifier using in Flat User Interface
     */
    theme?: string;
}
