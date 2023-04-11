import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessagesSendSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetMessagesSendRequest extends SpeakeasyBase {
    /**
     * The text you want to send.
     */
    body: string;
    /**
     * Refer to the `deduplication-id` parameter.
     */
    deduplicationId?: number;
    /**
     * The phone number of the recipient.
     */
    to: string;
}
export declare class GetMessagesSendResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request. The content or structure of your submission, or a parameter, was found to be invalid.
     */
    error?: shared.ErrorT;
    /**
     * An array of messages
     */
    messages?: shared.Message[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
