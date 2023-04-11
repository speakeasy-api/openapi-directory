import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiSendToClientFormRequest extends SpeakeasyBase {
    sendEstimationToClientApiModel: shared.SendEstimationToClientApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiSendToClientFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationApiSendToClientForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    estimationApiSendToClientForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
