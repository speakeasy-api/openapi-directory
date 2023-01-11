import { SpeakeasyBase } from "../../../internal/utils";
import { ClassStateEnum } from "./classstateenum";
import { GroupDetails } from "./groupdetails";
/**
 * Meta information provided by Canvs LMS
**/
export declare class ClassDetailsCanvas extends SpeakeasyBase {
    domain?: string;
    id?: string;
}
export declare enum ClassDetailsCleverSubjectEnum {
    EnglishLanguageArts = "english/language arts",
    Math = "math",
    Science = "science",
    SocialStudies = "social studies",
    Language = "language",
    HomeroomAdvisory = "homeroom/advisory",
    InterventionsOnlineLearning = "interventions/online learning",
    TechnologyAndEngineering = "technology and engineering",
    PeAndHealth = "PE and health",
    ArtsAndMusic = "arts and music",
    Other = "other"
}
/**
 * Clever.com section-related information
**/
export declare class ClassDetailsClever extends SpeakeasyBase {
    creationDate?: Date;
    id?: string;
    modificationDate?: Date;
    subject?: ClassDetailsCleverSubjectEnum;
    termEndDate?: Date;
    termName?: string;
    termStartDate?: Date;
}
/**
 * Google Classroom course-related information
**/
export declare class ClassDetailsGoogleClassroom extends SpeakeasyBase {
    alternateLink?: string;
    id?: string;
}
/**
 * Google Drive course-related information provided by Google Classroom
**/
export declare class ClassDetailsGoogleDrive extends SpeakeasyBase {
    teacherFolderAlternateLink?: string;
    teacherFolderId?: string;
}
export declare enum ClassDetailsIssuesSyncReasonEnum {
    OtherOrgnanization = "otherOrgnanization",
    PersonalSubscription = "personalSubscription"
}
/**
 * A sync issue
**/
export declare class ClassDetailsIssuesSync extends SpeakeasyBase {
    email?: string;
    id?: string;
    reason?: ClassDetailsIssuesSyncReasonEnum;
}
/**
 * Detected issues for this class
**/
export declare class ClassDetailsIssues extends SpeakeasyBase {
    sync?: ClassDetailsIssuesSync[];
}
/**
 * Meta information provided by the LTI consumer
**/
export declare class ClassDetailsLti extends SpeakeasyBase {
    contextId?: string;
    contextLabel?: string;
    contextTitle?: string;
}
/**
 * Meta information provided by Canvs LMS
**/
export declare class ClassDetailsMfc extends SpeakeasyBase {
    alternateLink?: string;
    id?: string;
}
export declare class ClassDetailsMicrosoftGraph extends SpeakeasyBase {
    id?: string;
}
/**
 * A classroom
**/
export declare class ClassDetails extends SpeakeasyBase {
    assignmentsCount?: number;
    canvas?: ClassDetailsCanvas;
    clever?: ClassDetailsClever;
    creationDate?: Date;
    description?: string;
    enrollmentCode?: string;
    googleClassroom?: ClassDetailsGoogleClassroom;
    googleDrive?: ClassDetailsGoogleDrive;
    id?: string;
    issues?: ClassDetailsIssues;
    lti?: ClassDetailsLti;
    mfc?: ClassDetailsMfc;
    microsoftGraph?: ClassDetailsMicrosoftGraph;
    name?: string;
    organization?: string;
    owner?: string;
    section?: string;
    state?: ClassStateEnum;
    studentsGroup?: GroupDetails;
    teachersGroup?: GroupDetails;
    theme?: string;
}
