import { Addon } from "./addon";
import { BranchingModel } from "./branchingmodel";
import { BranchRestrictions } from "./branchrestrictions";
import { Commits } from "./commits";
import { CommitStatuses } from "./commitstatuses";
import { Deployments } from "./deployments";
import { Downloads } from "./downloads";
import { IssueTracker } from "./issuetracker";
import { Pipelines } from "./pipelines";
import { Projects } from "./projects";
import { Properties } from "./properties";
import { Pullrequests } from "./pullrequests";
import { Refs } from "./refs";
import { Reports } from "./reports";
import { Repositories } from "./repositories";
import { Search } from "./search";
import { Snippets } from "./snippets";
import { Source } from "./source";
import { Ssh } from "./ssh";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
import { Workspaces } from "./workspaces";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.bitbucket.org/2.0"];
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
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * @see {@link https://bitbucket.org/api}
 */
export declare class SDK {
    /**
     * The addon resource is intended to use used by Bitbucket Cloud Connect
     *
     * @remarks
     * Apps, and only supports JWT authentication.
     *
     */
    addon: Addon;
    /**
     * Repository owners and administrators can set branch management
     *
     * @remarks
     * rules on a repository that control what can be pushed by whom.
     * Through these rules, you can enforce a project or team
     * workflow. For example, owners or administrators can:
     *
     * * Limit push powers
     * * Prevent branch deletion
     * * Prevent history re-writes (Git only)
     *
     */
    branchRestrictions: BranchRestrictions;
    /**
     * The branching model resource is used to modify the branching model
     *
     * @remarks
     * for a repository.
     *
     * You can use the branching model to define a branch based workflow
     * for your repositories. When you map your workflow to branch types,
     * you can ensure that branches are named consistently by configuring
     * which branch types to make available.
     *
     */
    branchingModel: BranchingModel;
    /**
     * Commit statuses provide a way to tag commits with meta data,
     *
     * @remarks
     * like automated build results.
     *
     */
    commitStatuses: CommitStatuses;
    /**
     * These are the repository's commits. They are paginated and returned in
     *
     * @remarks
     * reverse chronological order, similar to the output of git log.
     *
     */
    commits: Commits;
    /**
     * Teams are deploying code faster than ever, thanks to continuous
     *
     * @remarks
     * delivery practices and tools like Bitbucket Pipelines. Bitbucket
     * Deployments gives teams visibility into their deployment
     * environments and helps teams to track how far changes have
     * progressed in their deployment pipeline.
     *
     */
    deployments: Deployments;
    /**
     * Access the list of download links associated with the repository.
     */
    downloads: Downloads;
    /**
     * The issue resources provide functionality for getting information on
     *
     * @remarks
     * issues in an issue tracker, creating new issues, updating them and deleting
     * them.
     *
     * You can access public issues without authentication, but you can't gain access
     * to private repositories' issues. By authenticating, you will get the ability
     * to create issues, as well as access to updating data or deleting issues you
     * have access to.
     *
     */
    issueTracker: IssueTracker;
    /**
     * Bitbucket Pipelines brings continuous delivery to Bitbucket
     *
     * @remarks
     * Cloud, empowering teams with full branching to deployment
     * visibility and faster feedback loops.
     *
     */
    pipelines: Pipelines;
    /**
     * Bitbucket Cloud projects make it easier for teams to focus on
     *
     * @remarks
     * a goal, product, or process by organizing their repositories.
     *
     */
    projects: Projects;
    /**
     * Pull requests are a feature that makes it easier for developers
     *
     * @remarks
     * to collaborate using Bitbucket. They provide a user-friendly web
     * interface for discussing proposed changes before integrating them
     * into the official project.
     *
     */
    pullrequests: Pullrequests;
    /**
     * The refs resource allows you access branches and tags in a repository.
     *
     * @remarks
     * By default, results will be in the order the underlying source control
     * system returns them and identical to the ordering one sees when running
     * "$ git show-ref". Note that this follows simple lexical ordering of the
     *  ref names.
     *
     */
    refs: Refs;
    /**
     * Code insights provides reports, annotations, and metrics to help you
     *
     * @remarks
     * and your team improve code quality in pull requests throughout the code
     * review process. Some of the available code insights are static analysis
     * reports, security scan results, artifact links, unit tests, and build
     * status.
     *
     */
    reports: Reports;
    /**
     * A Git repository is a virtual storage of your project. It
     *
     * @remarks
     * allows you to save versions of your code, which you can access
     * when needed. The repo resource allows you to access public repos,
     * or repos that belong to a specific workspace.
     *
     */
    repositories: Repositories;
    search: Search;
    /**
     * Snippets allow you share code segments or files with yourself, members of
     *
     * @remarks
     * your workspace, or the world.
     *
     * Like pull requests, repositories and workspaces, the full set of snippets
     * is defined by what the current user has access to. This includes all
     * snippets owned by any of the workspaces the user is a member of, or
     * snippets by other users that the current user is either watching or has
     *  collaborated on (for instance by commenting on it).
     *
     */
    snippets: Snippets;
    /**
     * Browse the source code in the repository and
     *
     * @remarks
     *                               create new commits by uploading.
     */
    source: Source;
    /**
     * The SSH resource allows you to manage SSH keys.
     *
     * @remarks
     *
     */
    ssh: Ssh;
    /**
     * The users resource allows you to access public information
     *
     * @remarks
     * associated with a user account. Most resources in the users
     * endpoint have been deprecated in favor of workspaces.
     *
     */
    users: Users;
    /**
     * Webhooks provide a way to configure Bitbucket Cloud to make requests to
     *
     * @remarks
     * your server (or another external service) whenever certain events occur in
     * Bitbucket Cloud.
     *
     * A webhook consists of:
     *
     * * A subject -- The resource that generates the events. Currently, this resource
     * is the repository, user account, or team where you create the webhook.
     * * One or more event -- The default event is a repository push, but you can
     * select multiple events that can trigger the webhook.
     * * A URL -- The endpoint where you want Bitbucket to send the event payloads
     * when a matching event happens.
     *
     * There are two parts to getting a webhook to work: creating the webhook and
     * triggering the webhook. After you create a webhook for an event, every time
     * that event occurs, Bitbucket sends a payload request that describes the event
     * to the specified URL. Thus, you can think of webhooks as a kind of
     * notification system.
     *
     * Use webhooks to integrate applications with Bitbucket Cloud. The following
     * use cases provides examples of when you would want to use webhooks:
     *
     * * Every time a user pushes commits in a repository, you may want to notify
     * your CI server to start a build.
     * * Every time a user pushes commits or creates a pull request, you may want to
     * display a notification in your application.
     *
     */
    webhooks: Webhooks;
    /**
     * A workspace is where you create repositories, collaborate on
     *
     * @remarks
     * your code, and organize different streams of work in your Bitbucket
     * Cloud account. Workspaces replace the use of teams and users in API
     * calls.
     *
     */
    workspaces: Workspaces;
    properties: Properties;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
