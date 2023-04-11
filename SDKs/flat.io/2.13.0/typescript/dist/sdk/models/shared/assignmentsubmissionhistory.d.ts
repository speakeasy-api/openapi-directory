import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentSubmissionStateEnum } from "./assignmentsubmissionstateenum";
export declare class AssignmentSubmissionHistoryAttachment extends SpeakeasyBase {
    /**
     * The revision identifier that changed
     */
    revision?: string;
    /**
     * The score identifier that changed
     */
    score?: string;
}
/**
 * History item of the submission
 */
export declare class AssignmentSubmissionHistory extends SpeakeasyBase {
    attachment?: AssignmentSubmissionHistoryAttachment;
    /**
     * The date when the submission was changed
     */
    date?: Date;
    /**
     * The numerator of the grade at this time in the submission grade history
     */
    draftGrade?: number;
    /**
     * The numerator of the grade at this time in the submission grade history
     */
    grade?: number;
    /**
     * The denominator of the grade at this time in the submission grade history
     */
    maxPoints?: number;
    /**
     * State of the submission
     */
    state?: AssignmentSubmissionStateEnum;
    /**
     * The user(s) unique identifier(s) who made the change
     */
    users?: string[];
}
