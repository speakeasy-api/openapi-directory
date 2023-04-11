import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendPostRequest extends SpeakeasyBase {
    accept: string;
    contentType: string;
    /**
     * Message Body
     */
    sendSMSRequest: shared.SendSMSRequest;
}
export declare class SendPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Internal Server Error
     */
    sendPost500ApplicationJSONAny?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
