import { Articles } from "./articles";
import { Authors } from "./authors";
import { Collections } from "./collections";
import { Institutions } from "./institutions";
import { Other } from "./other";
import { Projects } from "./projects";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.figshare.com/v2"];
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
 * Figshare apiv2. Using Swagger 2.0
 */
export declare class SDK {
    articles: Articles;
    authors: Authors;
    collections: Collections;
    institutions: Institutions;
    other: Other;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
