import { AxiosInstance } from "axios";
import { Incidents } from "./incidents";
import { Locations } from "./locations";
export declare const ServerList: readonly ["https://bikewise.org/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    incidents: Incidents;
    locations: Locations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
