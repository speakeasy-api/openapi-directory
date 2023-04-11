import { Articles } from "./articles";
import { Comments } from "./comments";
import { DisplayAds } from "./displayads";
import { FollowedTags } from "./followedtags";
import { Followers } from "./followers";
import * as shared from "./models/shared";
import { Organizations } from "./organizations";
import { Pages } from "./pages";
import { PodcastEpisodes } from "./podcastepisodes";
import { ProfileImages } from "./profileimages";
import { Reactions } from "./reactions";
import { Readinglist } from "./readinglist";
import { Tags } from "./tags";
import { Users } from "./users";
import { Videos } from "./videos";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://dev.to/api"];
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
 * Access Forem articles, users and other resources via API.
 *
 * @remarks
 *         For a real-world example of Forem in action, check out [DEV](https://www.dev.to).
 *         All endpoints can be accessed with the 'api-key' header and a accept header, but
 *         some of them are accessible publicly without authentication.
 *
 *         Dates and date times, unless otherwise specified, must be in
 *         the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.
 */
export declare class SDK {
    articles: Articles;
    comments: Comments;
    displayAds: DisplayAds;
    followedTags: FollowedTags;
    followers: Followers;
    organizations: Organizations;
    pages: Pages;
    podcastEpisodes: PodcastEpisodes;
    profileImages: ProfileImages;
    reactions: Reactions;
    readinglist: Readinglist;
    tags: Tags;
    users: Users;
    videos: Videos;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
