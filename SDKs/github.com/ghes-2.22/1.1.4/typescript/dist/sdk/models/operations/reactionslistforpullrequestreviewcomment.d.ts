import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Returns a single [reaction type](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
 */
export declare enum ReactionsListForPullRequestReviewCommentContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForPullRequestReviewCommentRequest extends SpeakeasyBase {
    /**
     * comment_id parameter
     */
    commentId: number;
    /**
     * Returns a single [reaction type](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
     */
    content?: ReactionsListForPullRequestReviewCommentContentEnum;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
}
export declare class ReactionsListForPullRequestReviewCommentResponse extends SpeakeasyBase {
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
    reactions?: shared.Reaction[];
}
