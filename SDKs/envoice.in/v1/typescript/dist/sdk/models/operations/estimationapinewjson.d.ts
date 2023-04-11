import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiNewJsonRequest extends SpeakeasyBase {
    estimationCreateApiModel: shared.EstimationCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiNewJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationFullDetailsApiModel?: shared.EstimationFullDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
