import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Feedback comment added to an assignment submission
**/
export declare class AssignmentSubmissionComment extends SpeakeasyBase {
    comment?: string;
    date?: Date;
    id?: string;
    modificationDate?: Date;
    submission?: string;
    unread?: boolean;
    user?: string;
}
