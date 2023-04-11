import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.exchangerate-api.com/v4"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Fetch the latest currency exchange rates via API. ExchangeRate-API is free and unlimited.
 *
 * @see {@link https://www.exchangerate-api.com/docs/documentation} - API Documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Returns latest exchange rates in parameter-supplied base currency.
     */
    getLatestBaseCurrency(req: operations.GetLatestBaseCurrencyRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestBaseCurrencyResponse>;
}
