import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.exchangerate-api.com/v4"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getLatestBaseCurrency - Returns latest exchange rates in parameter-supplied base currency.
    **/
    getLatestBaseCurrency(req: operations.GetLatestBaseCurrencyRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestBaseCurrencyResponse>;
}
