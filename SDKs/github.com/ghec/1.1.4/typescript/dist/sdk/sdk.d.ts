import { Actions } from "./actions";
import { Activity } from "./activity";
import { Apps } from "./apps";
import { Billing } from "./billing";
import { Checks } from "./checks";
import { CodeScanning } from "./codescanning";
import { CodesOfConduct } from "./codesofconduct";
import { Codespaces } from "./codespaces";
import { Dependabot } from "./dependabot";
import { DependencyGraph } from "./dependencygraph";
import { Emojis } from "./emojis";
import { EnterpriseAdmin } from "./enterpriseadmin";
import { Gists } from "./gists";
import { Git } from "./git";
import { Gitignore } from "./gitignore";
import { Interactions } from "./interactions";
import { Issues } from "./issues";
import { Licenses } from "./licenses";
import { Markdown } from "./markdown";
import { Meta } from "./meta";
import { Migrations } from "./migrations";
import { Oidc } from "./oidc";
import { Orgs } from "./orgs";
import { Packages } from "./packages";
import { Projects } from "./projects";
import { Pulls } from "./pulls";
import { RateLimit } from "./ratelimit";
import { Reactions } from "./reactions";
import { Repos } from "./repos";
import { Scim } from "./scim";
import { Search } from "./search";
import { SecretScanning } from "./secretscanning";
import { ServerStatistics } from "./serverstatistics";
import { Teams } from "./teams";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://github.com/", "https://api.github.com"];
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
 * @see {@link https://docs.github.com/enterprise-cloud@latest/rest/} - GitHub Enterprise Cloud REST API
 */
export declare class SDK {
    /**
     * Endpoints to manage GitHub Actions using the REST API.
     */
    actions: Actions;
    /**
     * Activity APIs provide access to notifications, subscriptions, and timelines.
     */
    activity: Activity;
    /**
     * Information for integrations and installations.
     */
    apps: Apps;
    /**
     * Monitor charges and usage from Actions and Packages.
     */
    billing: Billing;
    /**
     * Rich interactions with checks run by your integrations.
     */
    checks: Checks;
    /**
     * Retrieve code scanning alerts from a repository.
     */
    codeScanning: CodeScanning;
    /**
     * Insight into codes of conduct for your communities.
     */
    codesOfConduct: CodesOfConduct;
    /**
     * Endpoints to manage Codespaces using the REST API.
     */
    codespaces: Codespaces;
    /**
     * Endpoints to manage Dependabot.
     */
    dependabot: Dependabot;
    /**
     * Endpoints to access Dependency Graph features.
     */
    dependencyGraph: DependencyGraph;
    /**
     * List emojis available to use on GitHub.
     */
    emojis: Emojis;
    /**
     * Enterprise Administration
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
     * Owner or admin management of users interactions.
     */
    interactions: Interactions;
    /**
     * Interact with GitHub Issues.
     */
    issues: Issues;
    /**
     * View various OSS licenses.
     */
    licenses: Licenses;
    /**
     * Render GitHub flavored markdown
     */
    markdown: Markdown;
    /**
     * Endpoints that give information about the API.
     */
    meta: Meta;
    /**
     * Move projects to or from GitHub.
     */
    migrations: Migrations;
    /**
     * Endpoints to manage GitHub OIDC configuration using the REST API.
     */
    oidc: Oidc;
    /**
     * Interact with GitHub Orgs.
     */
    orgs: Orgs;
    /**
     * Manage packages for authenticated users and organizations.
     */
    packages: Packages;
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
     * Provisioning of GitHub organization membership for SCIM-enabled providers.
     */
    scim: Scim;
    /**
     * Look for stuff on GitHub.
     */
    search: Search;
    /**
     * Retrieve secret scanning alerts from a repository.
     */
    secretScanning: SecretScanning;
    /**
     * Server statistics
     */
    serverStatistics: ServerStatistics;
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
