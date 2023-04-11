import { SpeakeasyBase } from "../../../internal/utils";
export declare class ServerStatisticsDormantUsers extends SpeakeasyBase {
    dormancyThreshold?: string;
    totalDormantUsers?: number;
}
export declare class ServerStatisticsGheStatsComments extends SpeakeasyBase {
    totalCommitComments?: number;
    totalGistComments?: number;
    totalIssueComments?: number;
    totalPullRequestComments?: number;
}
export declare class ServerStatisticsGheStatsGists extends SpeakeasyBase {
    privateGists?: number;
    publicGists?: number;
    totalGists?: number;
}
export declare class ServerStatisticsGheStatsHooks extends SpeakeasyBase {
    activeHooks?: number;
    inactiveHooks?: number;
    totalHooks?: number;
}
export declare class ServerStatisticsGheStatsIssues extends SpeakeasyBase {
    closedIssues?: number;
    openIssues?: number;
    totalIssues?: number;
}
export declare class ServerStatisticsGheStatsMilestones extends SpeakeasyBase {
    closedMilestones?: number;
    openMilestones?: number;
    totalMilestones?: number;
}
export declare class ServerStatisticsGheStatsOrgs extends SpeakeasyBase {
    disabledOrgs?: number;
    totalOrgs?: number;
    totalTeamMembers?: number;
    totalTeams?: number;
}
export declare class ServerStatisticsGheStatsPages extends SpeakeasyBase {
    totalPages?: number;
}
export declare class ServerStatisticsGheStatsPulls extends SpeakeasyBase {
    mergeablePulls?: number;
    mergedPulls?: number;
    totalPulls?: number;
    unmergeablePulls?: number;
}
export declare class ServerStatisticsGheStatsRepos extends SpeakeasyBase {
    forkRepos?: number;
    orgRepos?: number;
    rootRepos?: number;
    totalPushes?: number;
    totalRepos?: number;
    totalWikis?: number;
}
export declare class ServerStatisticsGheStatsUsers extends SpeakeasyBase {
    adminUsers?: number;
    suspendedUsers?: number;
    totalUsers?: number;
}
export declare class ServerStatisticsGheStats extends SpeakeasyBase {
    comments?: ServerStatisticsGheStatsComments;
    gists?: ServerStatisticsGheStatsGists;
    hooks?: ServerStatisticsGheStatsHooks;
    issues?: ServerStatisticsGheStatsIssues;
    milestones?: ServerStatisticsGheStatsMilestones;
    orgs?: ServerStatisticsGheStatsOrgs;
    pages?: ServerStatisticsGheStatsPages;
    pulls?: ServerStatisticsGheStatsPulls;
    repos?: ServerStatisticsGheStatsRepos;
    users?: ServerStatisticsGheStatsUsers;
}
export declare class ServerStatisticsGithubConnect extends SpeakeasyBase {
    featuresEnabled?: string[];
}
export declare class ServerStatistics extends SpeakeasyBase {
    collectionDate?: string;
    dormantUsers?: ServerStatisticsDormantUsers;
    gheStats?: ServerStatisticsGheStats;
    ghesVersion?: string;
    githubConnect?: ServerStatisticsGithubConnect;
    hostName?: string;
    schemaVersion?: string;
    serverId?: string;
}
