import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiDeleteJsonRequest extends SpeakeasyBase {
    estimationDeleteApiModel: shared.EstimationDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiDeleteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationApiDeleteJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    estimationApiDeleteJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
