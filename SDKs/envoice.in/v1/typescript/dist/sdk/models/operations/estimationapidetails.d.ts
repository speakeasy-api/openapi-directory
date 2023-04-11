import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiDetailsRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationFullDetailsApiModel?: shared.EstimationFullDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
