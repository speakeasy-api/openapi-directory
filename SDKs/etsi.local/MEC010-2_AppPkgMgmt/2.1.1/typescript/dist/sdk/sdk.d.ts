import { AxiosInstance } from "axios";
import { AppPkgm } from "./apppkgm";
import { AppPkgmNotifications } from "./apppkgmnotifications";
export declare const ServerList: readonly ["http://etsi.local", "https://localhost/app_pkgm/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    appPkgm: AppPkgm;
    appPkgmNotifications: AppPkgmNotifications;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
