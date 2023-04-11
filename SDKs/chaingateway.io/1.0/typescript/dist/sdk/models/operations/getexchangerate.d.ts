import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExchangeRateRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    getExchangeRateRequest: shared.GetExchangeRateRequest;
}
export declare class GetExchangeRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getExchangeRate?: shared.GetExchangeRate;
}
