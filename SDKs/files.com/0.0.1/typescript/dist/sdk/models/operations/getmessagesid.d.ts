import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessagesIdRequest extends SpeakeasyBase {
    /**
     * Message ID.
     */
    id: number;
}
export declare class GetMessagesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Messages object.
     */
    messageEntity?: shared.MessageEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
