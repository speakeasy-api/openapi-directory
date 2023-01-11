import { AxiosInstance } from "axios";
import { General } from "./general";
import { Transactions } from "./transactions";
export declare const ServerList: readonly ["https://balanceplatform-api-test.adyen.com/btl/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    general: General;
    transactions: Transactions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
