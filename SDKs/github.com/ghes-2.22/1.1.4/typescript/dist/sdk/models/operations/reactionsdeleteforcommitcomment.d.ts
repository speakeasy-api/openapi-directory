import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteForCommitCommentRequest extends SpeakeasyBase {
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    reactionId: number;
    repo: string;
}
export declare class ReactionsDeleteForCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
