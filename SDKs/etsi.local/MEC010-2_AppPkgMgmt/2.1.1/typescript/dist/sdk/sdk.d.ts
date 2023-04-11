import { AppPkgm } from "./apppkgm";
import { AppPkgmNotifications } from "./apppkgmnotifications";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://etsi.local", "https://localhost/app_pkgm/v1"];
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
 * ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management described using OpenAPI.
 *
 * @see {@link https://www.etsi.org/deliver/etsi_gs/MEC/001_099/01002/02.01.01_60/gs_MEC01002v020101p.pdf} - ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management, v2.1.1
 */
export declare class SDK {
    /**
     * App Package management
     */
    appPkgm: AppPkgm;
    /**
     * App Package management notifications
     */
    appPkgmNotifications: AppPkgmNotifications;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
