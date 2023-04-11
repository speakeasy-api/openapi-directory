import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessagesIdRelatedReceivedMessagesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetMessagesIdRelatedReceivedMessagesRequest extends SpeakeasyBase {
    /**
     * The `id` of the sent message
     */
    id: string;
}
export declare class GetMessagesIdRelatedReceivedMessagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request. The content or structure of your submission, or a parameter, was found to be invalid.
     */
    error?: shared.ErrorT;
    /**
     * An array of related messages.  If the `id` is not a sent message, the array will be empty.
     */
    messages?: shared.Message[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
