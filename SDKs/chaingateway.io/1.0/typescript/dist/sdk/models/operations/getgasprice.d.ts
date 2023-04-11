import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGasPriceRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    contentType: string;
}
export declare class GetGasPriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getGasPrice?: shared.GetGasPrice;
}
