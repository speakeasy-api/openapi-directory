import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AckMessageRequest extends SpeakeasyBase {
    /**
     * ID of Queue Message to be acknowledged
     */
    queueMessageId: string;
    /**
     * Name of Queue
     */
    queueName: string;
}
export declare class AckMessageResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    apiResponse?: shared.ApiResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
