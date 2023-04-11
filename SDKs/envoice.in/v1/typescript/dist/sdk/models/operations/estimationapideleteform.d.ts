import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiDeleteFormRequest extends SpeakeasyBase {
    estimationDeleteApiModel: shared.EstimationDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiDeleteFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationApiDeleteForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    estimationApiDeleteForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
