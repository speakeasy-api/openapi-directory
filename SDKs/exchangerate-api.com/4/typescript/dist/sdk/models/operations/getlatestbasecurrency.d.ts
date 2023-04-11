import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLatestBaseCurrencyRequest extends SpeakeasyBase {
    /**
     * **Base Currency**. *Example: USD*. You an use any of the ISO 4217 currency codes we support. See https://www.exchangerate-api.com/docs/supported-currencies
     */
    baseCurrency: string;
}
/**
 * Currency code not supported
 */
export declare class GetLatestBaseCurrency404ApplicationJSON extends SpeakeasyBase {
    errorType?: string;
    result?: string;
}
/**
 * Successful response
 */
export declare class GetLatestBaseCurrency200ApplicationJSON extends SpeakeasyBase {
    /**
     * The currency code you supplied as base in your request
     */
    base?: string;
    /**
     * The date these exchange rates are for
     */
    date?: string;
    /**
     * Each supported currency code in terms of the base currency
     */
    rates?: Record<string, number>;
    /**
     * The epoch time this set of exchange rates was generated
     */
    timeLastUpdated?: number;
}
export declare class GetLatestBaseCurrencyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getLatestBaseCurrency200ApplicationJSONObject?: GetLatestBaseCurrency200ApplicationJSON;
    /**
     * Currency code not supported
     */
    getLatestBaseCurrency404ApplicationJSONObject?: GetLatestBaseCurrency404ApplicationJSON;
}
