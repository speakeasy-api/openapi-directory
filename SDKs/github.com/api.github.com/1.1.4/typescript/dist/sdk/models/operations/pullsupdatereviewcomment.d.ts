import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsUpdateReviewCommentRequestBody extends SpeakeasyBase {
    /**
     * The text of the reply to the review comment.
     */
    body: string;
}
export declare class PullsUpdateReviewCommentRequest extends SpeakeasyBase {
    requestBody: PullsUpdateReviewCommentRequestBody;
    /**
     * The unique identifier of the comment.
     */
    commentId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class PullsUpdateReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestReviewComment?: shared.PullRequestReviewComment;
}
