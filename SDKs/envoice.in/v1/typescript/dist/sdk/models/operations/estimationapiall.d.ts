import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiAllRequest extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    listResultEstimationDetailsApiModel?: shared.ListResultEstimationDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
