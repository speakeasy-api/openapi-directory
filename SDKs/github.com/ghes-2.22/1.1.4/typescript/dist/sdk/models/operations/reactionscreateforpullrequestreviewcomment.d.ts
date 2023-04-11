import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#reaction-types) to add to the pull request review comment.
 */
export declare enum ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForPullRequestReviewCommentRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#reaction-types) to add to the pull request review comment.
     */
    content: ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForPullRequestReviewCommentRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForPullRequestReviewCommentRequestBody;
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    repo: string;
}
export declare class ReactionsCreateForPullRequestReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Reaction exists
     */
    reaction?: shared.Reaction;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
