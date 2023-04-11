import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiChangeStatusJsonRequest extends SpeakeasyBase {
    estimationChangeStatusApiModel: shared.EstimationChangeStatusApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiChangeStatusJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationApiChangeStatusJSON200ApplicationJSONBoolean?: boolean;
    /**
     * OK
     */
    estimationApiChangeStatusJSON200TextJSONBoolean?: boolean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
