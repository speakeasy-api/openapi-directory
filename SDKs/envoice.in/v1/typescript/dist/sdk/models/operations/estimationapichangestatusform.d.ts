import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiChangeStatusFormRequest extends SpeakeasyBase {
    estimationChangeStatusApiModel: shared.EstimationChangeStatusApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiChangeStatusFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationApiChangeStatusForm200ApplicationJSONBoolean?: boolean;
    /**
     * OK
     */
    estimationApiChangeStatusForm200TextJSONBoolean?: boolean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
