import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Feedback comment added to an assignment submission
 */
export declare class AssignmentSubmissionComment extends SpeakeasyBase {
    /**
     * The comment text
     */
    comment?: string;
    /**
     * The date when the comment was posted
     */
    date?: Date;
    /**
     * The comment unique identifier
     */
    id?: string;
    /**
     * The date of the last comment modification
     */
    modificationDate?: Date;
    /**
     * The submission unique identifier
     */
    submission?: string;
    /**
     * True if the comment is unread by the current user
     */
    unread?: boolean;
    /**
     * The author unique identifier
     */
    user?: string;
}
