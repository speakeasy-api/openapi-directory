import { SpeakeasyBase } from "../../../internal/utils";
import { MediaAttachment } from "./mediaattachment";
import { GoogleClassroomCoursework } from "./googleclassroomcoursework";
import { MicrosoftGraphAssignment } from "./microsoftgraphassignment";
import { AssignmentSubmission } from "./assignmentsubmission";
import { AssignmentTypeEnum } from "./assignmenttypeenum";
/**
 * A Canvas LMS assignment
**/
export declare class AssignmentCanvas extends SpeakeasyBase {
    alternateLink?: string;
    id?: string;
}
/**
 * An LTI assignment
**/
export declare class AssignmentLti extends SpeakeasyBase {
    id?: string;
}
/**
 * A MusicFirst Classroom assignment
**/
export declare class AssignmentMfc extends SpeakeasyBase {
    alternateLink?: string;
    id?: string;
}
export declare enum AssignmentStateEnum {
    Draft = "draft",
    Active = "active",
    Archived = "archived"
}
/**
 * Assignment details
**/
export declare class Assignment extends SpeakeasyBase {
    attachments?: MediaAttachment[];
    canvas?: AssignmentCanvas;
    classroom?: string;
    cover?: string;
    coverFile?: string;
    creationDate?: Date;
    creator?: string;
    description?: string;
    dueDate?: Date;
    googleClassroom?: GoogleClassroomCoursework;
    lti?: AssignmentLti;
    maxPoints?: number;
    mfc?: AssignmentMfc;
    microsoftGraph?: MicrosoftGraphAssignment;
    scheduledDate?: Date;
    state?: AssignmentStateEnum;
    submissions?: AssignmentSubmission[];
    title?: string;
    type?: AssignmentTypeEnum;
}
