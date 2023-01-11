import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentSubmissionStateEnum } from "./assignmentsubmissionstateenum";
export declare class AssignmentSubmissionHistoryAttachment extends SpeakeasyBase {
    revision?: string;
    score?: string;
}
/**
 * History item of the submission
**/
export declare class AssignmentSubmissionHistory extends SpeakeasyBase {
    attachment?: AssignmentSubmissionHistoryAttachment;
    date?: Date;
    draftGrade?: number;
    grade?: number;
    maxPoints?: number;
    state?: AssignmentSubmissionStateEnum;
    users?: string[];
}
