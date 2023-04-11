import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentSubmission } from "./assignmentsubmission";
import { AssignmentTypeEnum } from "./assignmenttypeenum";
import { GoogleClassroomCoursework } from "./googleclassroomcoursework";
import { MediaAttachment } from "./mediaattachment";
import { MicrosoftGraphAssignment } from "./microsoftgraphassignment";
/**
 * A Canvas LMS assignment
 */
export declare class AssignmentCanvas extends SpeakeasyBase {
    /**
     * Link to Canvas assignment
     */
    alternateLink?: string;
    /**
     * Unique identifier of the course on Canvas assignment
     */
    id?: string;
}
/**
 * An LTI assignment
 */
export declare class AssignmentLti extends SpeakeasyBase {
    /**
     * Resource ID in the LMS
     */
    id?: string;
}
/**
 * A MusicFirst Classroom assignment
 */
export declare class AssignmentMfc extends SpeakeasyBase {
    /**
     * Link to MusicFirst Classroom task
     */
    alternateLink?: string;
    /**
     * Unique identifier of the course on MusicFirst Task
     */
    id?: string;
}
/**
 * State of the assignment
 */
export declare enum AssignmentStateEnum {
    Draft = "draft",
    Active = "active",
    Archived = "archived"
}
/**
 * Assignment details
 */
export declare class Assignment extends SpeakeasyBase {
    attachments?: MediaAttachment[];
    /**
     * A Canvas LMS assignment
     */
    canvas?: AssignmentCanvas;
    /**
     * The unique identifier of the class where this assignment was posted
     */
    classroom?: string;
    /**
     * The URL of the cover to display
     */
    cover?: string;
    /**
     * The id of the cover to display
     */
    coverFile?: string;
    /**
     * The creation date of this assignment
     */
    creationDate?: Date;
    /**
     * The User unique identifier of the creator of this assignment
     *
     * @remarks
     *
     */
    creator?: string;
    /**
     * Description and content of the assignment
     */
    description?: string;
    /**
     * The due date of this assignment, late submissions will be marked as
     *
     * @remarks
     * paste due.
     *
     */
    dueDate?: Date;
    /**
     * A coursework on Google Classroom
     */
    googleClassroom?: GoogleClassroomCoursework;
    /**
     * An LTI assignment
     */
    lti?: AssignmentLti;
    /**
     * If set, the grading will be enabled for the assignement
     *
     * @remarks
     *
     */
    maxPoints?: number;
    /**
     * A MusicFirst Classroom assignment
     */
    mfc?: AssignmentMfc;
    /**
     * A Microsoft Teams asignment
     */
    microsoftGraph?: MicrosoftGraphAssignment;
    /**
     * The publication (scheduled) date of the assignment.
     *
     * @remarks
     * If this one is specified, the assignment will only be listed to the teachers of the class.
     *
     */
    scheduledDate?: Date;
    /**
     * State of the assignment
     */
    state?: AssignmentStateEnum;
    submissions?: AssignmentSubmission[];
    /**
     * Title of the assignment
     */
    title?: string;
    /**
     * Type of the assignment
     */
    type?: AssignmentTypeEnum;
}
