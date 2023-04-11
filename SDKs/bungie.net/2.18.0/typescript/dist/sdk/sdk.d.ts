import { App } from "./app";
import { CommunityContent } from "./communitycontent";
import { Content } from "./content";
import { Destiny2 } from "./destiny2";
import { Fireteam } from "./fireteam";
import { Forum } from "./forum";
import { GroupV2 } from "./groupv2";
import * as operations from "./models/operations";
import { Preview } from "./preview";
import { Social } from "./social";
import { Tokens } from "./tokens";
import { Trending } from "./trending";
import { User } from "./user";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.bungie.net/Platform"];
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
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation} - Our Wiki page about OAuth through Bungie.net.
 */
export declare class SDK {
    /**
     * application
     */
    app: App;
    /**
     * communitycontent
     */
    communityContent: CommunityContent;
    /**
     * content
     */
    content: Content;
    /**
     * destiny2
     */
    destiny2: Destiny2;
    /**
     * fireteam
     */
    fireteam: Fireteam;
    /**
     * forum
     */
    forum: Forum;
    /**
     * groupV2
     */
    groupV2: GroupV2;
    preview: Preview;
    /**
     * social
     */
    social: Social;
    /**
     * tokens
     */
    tokens: Tokens;
    /**
     * trending
     */
    trending: Trending;
    /**
     * user
     */
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * List of available localization cultures
     */
    dotGetAvailableLocales(config?: AxiosRequestConfig): Promise<operations.DotGetAvailableLocalesResponse>;
    /**
     * Get the common settings used by the Bungie.Net environment.
     */
    dotGetCommonSettings(config?: AxiosRequestConfig): Promise<operations.DotGetCommonSettingsResponse>;
    /**
     * Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
     */
    dotGetGlobalAlerts(req: operations.DotGetGlobalAlertsRequest, config?: AxiosRequestConfig): Promise<operations.DotGetGlobalAlertsResponse>;
    /**
     * Get the user-specific system overrides that should be respected alongside common systems.
     */
    dotGetUserSystemOverrides(config?: AxiosRequestConfig): Promise<operations.DotGetUserSystemOverridesResponse>;
}
