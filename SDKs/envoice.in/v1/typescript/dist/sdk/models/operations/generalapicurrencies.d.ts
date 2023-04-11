import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeneralApiCurrenciesRequest extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GeneralApiCurrenciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    currencyDetailsApiModels?: shared.CurrencyDetailsApiModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
