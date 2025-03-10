import { SpeakeasyBase } from "../../../internal/utils";
import { NullableLicenseSimple } from "./nullablelicensesimple";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { SimpleUser } from "./simpleuser";
export declare class RepositoryPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
export declare class RepositoryTemplateRepositoryOwner extends SpeakeasyBase {
    avatarUrl?: string;
    eventsUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    gravatarId?: string;
    htmlUrl?: string;
    id?: number;
    login?: string;
    nodeId?: string;
    organizationsUrl?: string;
    receivedEventsUrl?: string;
    reposUrl?: string;
    siteAdmin?: boolean;
    starredUrl?: string;
    subscriptionsUrl?: string;
    type?: string;
    url?: string;
}
export declare class RepositoryTemplateRepositoryPermissions extends SpeakeasyBase {
    admin?: boolean;
    maintain?: boolean;
    pull?: boolean;
    push?: boolean;
    triage?: boolean;
}
export declare class RepositoryTemplateRepository extends SpeakeasyBase {
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    anonymousAccessEnabled?: boolean;
    archiveUrl?: string;
    archived?: boolean;
    assigneesUrl?: string;
    blobsUrl?: string;
    branchesUrl?: string;
    cloneUrl?: string;
    collaboratorsUrl?: string;
    commentsUrl?: string;
    commitsUrl?: string;
    compareUrl?: string;
    contentsUrl?: string;
    contributorsUrl?: string;
    createdAt?: string;
    defaultBranch?: string;
    deploymentsUrl?: string;
    description?: string;
    disabled?: boolean;
    downloadsUrl?: string;
    eventsUrl?: string;
    fork?: boolean;
    forksCount?: number;
    forksUrl?: string;
    fullName?: string;
    gitCommitsUrl?: string;
    gitRefsUrl?: string;
    gitTagsUrl?: string;
    gitUrl?: string;
    hasDownloads?: boolean;
    hasIssues?: boolean;
    hasPages?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    homepage?: string;
    hooksUrl?: string;
    htmlUrl?: string;
    id?: number;
    isTemplate?: boolean;
    issueCommentUrl?: string;
    issueEventsUrl?: string;
    issuesUrl?: string;
    keysUrl?: string;
    labelsUrl?: string;
    language?: string;
    languagesUrl?: string;
    mergesUrl?: string;
    milestonesUrl?: string;
    mirrorUrl?: string;
    name?: string;
    networkCount?: number;
    nodeId?: string;
    notificationsUrl?: string;
    openIssuesCount?: number;
    owner?: RepositoryTemplateRepositoryOwner;
    permissions?: RepositoryTemplateRepositoryPermissions;
    private?: boolean;
    pullsUrl?: string;
    pushedAt?: string;
    releasesUrl?: string;
    size?: number;
    sshUrl?: string;
    stargazersCount?: number;
    stargazersUrl?: string;
    statusesUrl?: string;
    subscribersCount?: number;
    subscribersUrl?: string;
    subscriptionUrl?: string;
    svnUrl?: string;
    tagsUrl?: string;
    teamsUrl?: string;
    topics?: string[];
    treesUrl?: string;
    updatedAt?: string;
    url?: string;
    watchersCount?: number;
}
/**
 * A git repository
 */
export declare class Repository extends SpeakeasyBase {
    /**
     * Whether to allow forking this repo
     */
    allowForking?: boolean;
    /**
     * Whether to allow merge commits for pull requests.
     */
    allowMergeCommit?: boolean;
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allowRebaseMerge?: boolean;
    /**
     * Whether to allow squash merges for pull requests.
     */
    allowSquashMerge?: boolean;
    anonymousAccessEnabled?: boolean;
    archiveUrl: string;
    /**
     * Whether the repository is archived.
     */
    archived: boolean;
    assigneesUrl: string;
    blobsUrl: string;
    branchesUrl: string;
    cloneUrl: string;
    collaboratorsUrl: string;
    commentsUrl: string;
    commitsUrl: string;
    compareUrl: string;
    contentsUrl: string;
    contributorsUrl: string;
    createdAt: Date;
    /**
     * The default branch of the repository.
     */
    defaultBranch: string;
    deploymentsUrl: string;
    description: string;
    /**
     * Returns whether or not this repository disabled.
     */
    disabled: boolean;
    downloadsUrl: string;
    eventsUrl: string;
    fork: boolean;
    forks: number;
    forksCount: number;
    forksUrl: string;
    fullName: string;
    gitCommitsUrl: string;
    gitRefsUrl: string;
    gitTagsUrl: string;
    gitUrl: string;
    /**
     * Whether downloads are enabled.
     */
    hasDownloads: boolean;
    /**
     * Whether issues are enabled.
     */
    hasIssues: boolean;
    hasPages: boolean;
    /**
     * Whether projects are enabled.
     */
    hasProjects: boolean;
    /**
     * Whether the wiki is enabled.
     */
    hasWiki: boolean;
    homepage: string;
    hooksUrl: string;
    htmlUrl: string;
    /**
     * Unique identifier of the repository
     */
    id: number;
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    isTemplate?: boolean;
    issueCommentUrl: string;
    issueEventsUrl: string;
    issuesUrl: string;
    keysUrl: string;
    labelsUrl: string;
    language: string;
    languagesUrl: string;
    /**
     * License Simple
     */
    license: NullableLicenseSimple;
    masterBranch?: string;
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl: string;
    /**
     * The name of the repository.
     */
    name: string;
    networkCount?: number;
    nodeId: string;
    notificationsUrl: string;
    openIssues: number;
    openIssuesCount: number;
    /**
     * Simple User
     */
    organization?: NullableSimpleUser;
    /**
     * Simple User
     */
    owner: SimpleUser;
    permissions?: RepositoryPermissions;
    /**
     * Whether the repository is private or public.
     */
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    size: number;
    sshUrl: string;
    stargazersCount: number;
    stargazersUrl: string;
    starredAt?: string;
    statusesUrl: string;
    subscribersCount?: number;
    subscribersUrl: string;
    subscriptionUrl: string;
    svnUrl: string;
    tagsUrl: string;
    teamsUrl: string;
    templateRepository?: RepositoryTemplateRepository;
    topics?: string[];
    treesUrl: string;
    updatedAt: Date;
    url: string;
    watchers: number;
    watchersCount: number;
}
