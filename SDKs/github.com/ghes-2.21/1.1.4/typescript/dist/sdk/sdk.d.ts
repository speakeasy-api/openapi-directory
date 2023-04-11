import { Activity } from "./activity";
import { Apps } from "./apps";
import { Checks } from "./checks";
import { CodesOfConduct } from "./codesofconduct";
import { Emojis } from "./emojis";
import { EnterpriseAdmin } from "./enterpriseadmin";
import { Gists } from "./gists";
import { Git } from "./git";
import { Gitignore } from "./gitignore";
import { Issues } from "./issues";
import { Licenses } from "./licenses";
import { Markdown } from "./markdown";
import { Meta } from "./meta";
import { OauthAuthorizations } from "./oauthauthorizations";
import { Orgs } from "./orgs";
import { Projects } from "./projects";
import { Pulls } from "./pulls";
import { RateLimit } from "./ratelimit";
import { Reactions } from "./reactions";
import { Repos } from "./repos";
import { Search } from "./search";
import { Teams } from "./teams";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://{protocol}://{hostname}/api/v3"];
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
 * GitHub's v3 REST API.
 *
 * @see {@link https://docs.github.com/enterprise-server@2.21/rest/} - GitHub Enterprise Developer Docs
 */
export declare class SDK {
    /**
     * Activity APIs provide access to notifications, subscriptions, and timelines.
     */
    activity: Activity;
    /**
     * Information for integrations and installations.
     */
    apps: Apps;
    /**
     * Rich interactions with checks run by your integrations.
     */
    checks: Checks;
    /**
     * Insight into codes of conduct for your communities.
     */
    codesOfConduct: CodesOfConduct;
    /**
     * List emojis available to use on GitHub.
     */
    emojis: Emojis;
    /**
     * Administer a GitHub enterprise.
     */
    enterpriseAdmin: EnterpriseAdmin;
    /**
     * View, modify your gists.
     */
    gists: Gists;
    /**
     * Raw Git functionality.
     */
    git: Git;
    /**
     * View gitignore templates
     */
    gitignore: Gitignore;
    /**
     * Interact with GitHub Issues.
     */
    issues: Issues;
    /**
     * View various OSS licenses.
     */
    licenses: Licenses;
    /**
     * Render Github flavored markdown
     */
    markdown: Markdown;
    /**
     * Endpoints that give information about the API.
     */
    meta: Meta;
    /**
     * Manage access of OAuth applications
     */
    oauthAuthorizations: OauthAuthorizations;
    /**
     * Interact with GitHub Orgs.
     */
    orgs: Orgs;
    /**
     * Interact with GitHub Projects.
     */
    projects: Projects;
    /**
     * Interact with GitHub Pull Requests.
     */
    pulls: Pulls;
    /**
     * Check your current rate limit status
     */
    rateLimit: RateLimit;
    /**
     * Interact with reactions to various GitHub entities.
     */
    reactions: Reactions;
    /**
     * Interact with GitHub Repos.
     */
    repos: Repos;
    /**
     * Look for stuff on GitHub.
     */
    search: Search;
    /**
     * Interact with GitHub Teams.
     */
    teams: Teams;
    /**
     * Interact with and view information about users and also current user.
     */
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
