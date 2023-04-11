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
     * The unique identifier of the comment.
     */
    commentId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The number that identifies the pull request.
     */
    pullNumber: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
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
