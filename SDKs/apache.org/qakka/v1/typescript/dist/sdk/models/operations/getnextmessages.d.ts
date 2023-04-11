import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNextMessagesRequest extends SpeakeasyBase {
    /**
     * Number of messages to get
     */
    count?: string;
    /**
     * Name of Queue
     */
    queueName: string;
}
export declare class GetNextMessagesResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    apiResponse?: shared.ApiResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
