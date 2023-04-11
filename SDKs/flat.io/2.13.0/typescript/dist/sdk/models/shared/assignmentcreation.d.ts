import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentTypeEnum } from "./assignmenttypeenum";
import { ClassAttachmentCreation } from "./classattachmentcreation";
/**
 * Possible modes of assigning assignments
 */
export declare enum AssignmentCreationAssigneeModeEnum {
    Everyone = "everyone",
    Selected = "selected"
}
/**
 * Google Classroom options for this assignment
 */
export declare class AssignmentCreationGoogleClassroom extends SpeakeasyBase {
    /**
     * Identifier of the topic where the assignment is created
     */
    topicId?: string;
}
/**
 * Microsoft Graph options for this assignment
 */
export declare class AssignmentCreationMicrosoftGraph extends SpeakeasyBase {
    /**
     * List of categories this assignment belongs to
     */
    categories?: string[];
}
/**
 * State of the assignment
 */
export declare enum AssignmentCreationStateEnum {
    Draft = "draft",
    Active = "active"
}
/**
 * Assignment creation details
 */
export declare class AssignmentCreation extends SpeakeasyBase {
    /**
     * Identifiers for the students that have access to the assignment
     */
    assignedStudents?: string[];
    /**
     * Possible modes of assigning assignments
     */
    assigneeMode?: AssignmentCreationAssigneeModeEnum;
    attachments?: ClassAttachmentCreation[];
    /**
     * The URL of the cover to display
     */
    cover?: string;
    /**
     * The id of the cover to display
     */
    coverFile?: string;
    /**
     * Description and content of the assignment
     */
    description?: string;
    /**
     * The due date of this assignment, late submissions will be marked as paste due. If not set, the assignment won't have a due date.
     *
     * @remarks
     *
     */
    dueDate?: Date;
    /**
     * Google Classroom options for this assignment
     */
    googleClassroom?: AssignmentCreationGoogleClassroom;
    /**
     * If set, the grading will be enabled for the assignement with this value as the maximum of points
     *
     * @remarks
     *
     */
    maxPoints?: number;
    /**
     * Microsoft Graph options for this assignment
     */
    microsoftGraph?: AssignmentCreationMicrosoftGraph;
    /**
     * The number of playback authorized on the scores of the assignment.
     */
    nbPlaybackAuthorized?: number;
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
    state?: AssignmentCreationStateEnum;
    /**
     * Title of the assignment
     */
    title?: string;
    /**
     * The id of the associated toolset
     */
    toolset?: string;
    /**
     * Type of the assignment
     */
    type?: AssignmentTypeEnum;
}
