import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteForPullRequestCommentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the comment.
     */
    commentId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The unique identifier of the reaction.
     */
    reactionId: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReactionsDeleteForPullRequestCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
