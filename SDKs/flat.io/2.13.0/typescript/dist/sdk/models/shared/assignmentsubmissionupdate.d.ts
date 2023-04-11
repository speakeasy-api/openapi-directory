import { SpeakeasyBase } from "../../../internal/utils";
import { ClassAttachmentCreation } from "./classattachmentcreation";
export declare class AssignmentSubmissionUpdateComments extends SpeakeasyBase {
    /**
     * The total number of comments added to the submission
     */
    total?: number;
    /**
     * The number of unread comments for the current user
     */
    unread?: number;
}
/**
 * Assignment Submission creation
 */
export declare class AssignmentSubmissionUpdate extends SpeakeasyBase {
    attachments?: ClassAttachmentCreation[];
    comments?: AssignmentSubmissionUpdateComments;
    /**
     * Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission
     */
    draftGrade?: number;
    /**
     * Optional grade. If unset, no grade was set.
     */
    grade?: number;
    /**
     * If `true`, the submission will be marked as done
     */
    return?: boolean;
    /**
     * If `true`, the submission will be marked as done
     */
    submit?: boolean;
}
