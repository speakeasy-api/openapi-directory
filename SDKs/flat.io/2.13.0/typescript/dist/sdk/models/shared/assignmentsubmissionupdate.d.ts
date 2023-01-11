import { SpeakeasyBase } from "../../../internal/utils";
import { ClassAttachmentCreation } from "./classattachmentcreation";
export declare class AssignmentSubmissionUpdateComments extends SpeakeasyBase {
    total?: number;
    unread?: number;
}
/**
 * Assignment Submission creation
**/
export declare class AssignmentSubmissionUpdate extends SpeakeasyBase {
    attachments?: ClassAttachmentCreation[];
    comments?: AssignmentSubmissionUpdateComments;
    draftGrade?: number;
    grade?: number;
    return?: boolean;
    submit?: boolean;
}
