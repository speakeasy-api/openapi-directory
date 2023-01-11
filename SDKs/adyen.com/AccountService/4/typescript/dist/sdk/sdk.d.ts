import { AxiosInstance } from "axios";
import { AccountHolders } from "./accountholders";
import { Accounts } from "./accounts";
import { Verification } from "./verification";
export declare const ServerList: readonly ["https://cal-test.adyen.com/cal/services/Account/v4"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accountHolders: AccountHolders;
    accounts: Accounts;
    verification: Verification;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
