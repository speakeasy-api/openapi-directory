import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsCreateReplyForReviewCommentRequestBody extends SpeakeasyBase {
    /**
     * The text of the review comment.
     */
    body: string;
}
export declare class PullsCreateReplyForReviewCommentRequest extends SpeakeasyBase {
    requestBody: PullsCreateReplyForReviewCommentRequestBody;
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsCreateReplyForReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    pullRequestReviewComment?: shared.PullRequestReviewComment;
}
