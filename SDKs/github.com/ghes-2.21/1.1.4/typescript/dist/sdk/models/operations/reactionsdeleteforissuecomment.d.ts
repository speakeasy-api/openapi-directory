import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteForIssueCommentRequest extends SpeakeasyBase {
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    reactionId: number;
    repo: string;
}
export declare class ReactionsDeleteForIssueCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
