import { AxiosInstance } from "axios";
import { Country } from "./country";
import { Help } from "./help";
import { Totals } from "./totals";
export declare const ServerList: readonly ["https://covid19-api.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    country: Country;
    help: Help;
    totals: Totals;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
