import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchMessagesIdRequestBody extends SpeakeasyBase {
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
}
export declare class PatchMessagesIdRequest extends SpeakeasyBase {
    requestBody: PatchMessagesIdRequestBody;
    /**
     * Message ID.
     */
    id: number;
}
export declare class PatchMessagesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Messages object.
     */
    messageEntity?: shared.MessageEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
