import { SpeakeasyBase } from "../../../internal/utils";
import { ClassAttachmentCreation } from "./classattachmentcreation";
import { AssignmentTypeEnum } from "./assignmenttypeenum";
export declare enum AssignmentCreationAssigneeModeEnum {
    Everyone = "everyone",
    Selected = "selected"
}
/**
 * Google Classroom options for this assignment
**/
export declare class AssignmentCreationGoogleClassroom extends SpeakeasyBase {
    topicId?: string;
}
/**
 * Microsoft Graph options for this assignment
**/
export declare class AssignmentCreationMicrosoftGraph extends SpeakeasyBase {
    categories?: string[];
}
export declare enum AssignmentCreationStateEnum {
    Draft = "draft",
    Active = "active"
}
/**
 * Assignment creation details
**/
export declare class AssignmentCreation extends SpeakeasyBase {
    assignedStudents?: string[];
    assigneeMode?: AssignmentCreationAssigneeModeEnum;
    attachments?: ClassAttachmentCreation[];
    cover?: string;
    coverFile?: string;
    description?: string;
    dueDate?: Date;
    googleClassroom?: AssignmentCreationGoogleClassroom;
    maxPoints?: number;
    microsoftGraph?: AssignmentCreationMicrosoftGraph;
    nbPlaybackAuthorized?: number;
    scheduledDate?: Date;
    state?: AssignmentCreationStateEnum;
    title?: string;
    toolset?: string;
    type?: AssignmentTypeEnum;
}
