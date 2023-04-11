import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EstimationApiDeleteRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiDeleteRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationApiDeleteRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    estimationApiDeleteRaw200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
