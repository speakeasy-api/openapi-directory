import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendMessageBinaryRequest extends SpeakeasyBase {
    /**
     * Data to be send with Queue Message
     */
    requestBody: Uint8Array;
    /**
     * Content type of the data to be sent with Queue Message
     */
    contentType: string;
    delay?: string;
    expiration?: string;
    /**
     * Name of Queue
     */
    queueName: string;
    /**
     * Regions to which message is to be sent
     */
    regions?: string;
}
export declare class SendMessageBinaryResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    apiResponse?: shared.ApiResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
