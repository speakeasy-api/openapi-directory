import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSubmissionCommentSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PostSubmissionCommentRequest extends SpeakeasyBase {
    assignmentSubmissionCommentCreation: shared.AssignmentSubmissionCommentCreation;
    /**
     * Unique identifier of the assignment
     */
    assignment: string;
    /**
     * Unique identifier of the class
     */
    class: string;
    /**
     * Unique identifier of the submission
     */
    submission: string;
}
export declare class PostSubmissionCommentResponse extends SpeakeasyBase {
    /**
     * The comment
     */
    assignmentSubmissionComment?: shared.AssignmentSubmissionComment;
    contentType: string;
    /**
     * Not granted to access to this submission
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
