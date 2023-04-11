import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiSendToClientJsonRequest extends SpeakeasyBase {
    sendEstimationToClientApiModel: shared.SendEstimationToClientApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiSendToClientJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationApiSendToClientJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    estimationApiSendToClientJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
