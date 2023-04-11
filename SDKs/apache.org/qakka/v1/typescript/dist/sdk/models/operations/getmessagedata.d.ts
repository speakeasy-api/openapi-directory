import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMessageDataRequest extends SpeakeasyBase {
    /**
     * ID of Queue Message for which data is to be returned
     */
    queueMessageId: string;
    /**
     * Name of Queue
     */
    queueName: string;
}
export declare class GetMessageDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
