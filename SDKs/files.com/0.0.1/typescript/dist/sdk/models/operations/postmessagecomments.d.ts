import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMessageCommentsRequestBody extends SpeakeasyBase {
    /**
     * Comment body.
     */
    body: string;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class PostMessageCommentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The MessageComments object.
     */
    messageCommentEntity?: shared.MessageCommentEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
