import { AToZ } from "./atoz";
import { Categories } from "./categories";
import { Channels } from "./channels";
import { Episodes } from "./episodes";
import { Metadata } from "./metadata";
import * as shared from "./models/shared";
import { ProgrammesTLEOs } from "./programmestleos";
import { Regions } from "./regions";
import { Search } from "./search";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://ibl.api.bbci.co.uk/ibl/v1", "http://ibl.api.bbci.co.uk/ibl/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * The definitive iPlayer API.
 *
 * @see {@link http://smethur.st/posts/176135860} - BBC iPlayer documentation
 */
export declare class SDK {
    aToZ: AToZ;
    categories: Categories;
    channels: Channels;
    episodes: Episodes;
    metadata: Metadata;
    programmesTLEOs: ProgrammesTLEOs;
    regions: Regions;
    search: Search;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
