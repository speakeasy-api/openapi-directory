import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMessagesRequestBody extends SpeakeasyBase {
    /**
     * Message body.
     */
    body: string;
    /**
     * Project to which the message should be attached.
     */
    projectId: number;
    /**
     * Message subject.
     */
    subject: string;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class PostMessagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Messages object.
     */
    messageEntity?: shared.MessageEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
