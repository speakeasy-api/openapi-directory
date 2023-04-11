import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsActionsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsAdministrationEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for checks on code. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsChecksEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for notification of content references and creation content attachments. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsContentReferencesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsContentsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for deployments and deployment statuses. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsDeploymentsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for managing repository environments. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsEnvironmentsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsIssuesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for organization teams and members. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsMembersEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsMetadataEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage access to an organization. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsOrganizationAdministrationEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage the post-receive hooks for an organization. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsOrganizationHooksEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for organization packages published to GitHub Packages. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsOrganizationPackagesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for viewing an organization's plan. Can be one of: `read`.
 */
export declare enum AppPermissionsOrganizationPlanEnum {
    Read = "read"
}
/**
 * The level of permission to grant the access token to manage organization projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.
 */
export declare enum AppPermissionsOrganizationProjectsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The level of permission to grant the access token to manage organization secrets. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsOrganizationSecretsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsOrganizationSelfHostedRunnersEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to view and manage users blocked by the organization. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsOrganizationUserBlockingEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for packages published to GitHub Packages. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsPackagesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsPagesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsPullRequestsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage the post-receive hooks for a repository. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsRepositoryHooksEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage repository projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.
 */
export declare enum AppPermissionsRepositoryProjectsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The level of permission to grant the access token to view and manage secret scanning alerts. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsSecretScanningAlertsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage repository secrets. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsSecretsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to view and manage security events like code scanning alerts. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsSecurityEventsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage just a single file. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsSingleFileEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for commit statuses. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsStatusesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage team discussions and related comments. Can be one of: `read` or `write`.
 */
export declare enum AppPermissionsTeamDiscussionsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to retrieve Dependabot alerts. Can be one of: `read`.
 */
export declare enum AppPermissionsVulnerabilityAlertsEnum {
    Read = "read"
}
/**
 * The level of permission to grant the access token to update GitHub Actions workflow files. Can be one of: `write`.
 */
export declare enum AppPermissionsWorkflowsEnum {
    Write = "write"
}
/**
 * The permissions granted to the user-to-server access token.
 */
export declare class AppPermissions extends SpeakeasyBase {
    /**
     * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts. Can be one of: `read` or `write`.
     */
    actions?: AppPermissionsActionsEnum;
    /**
     * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation. Can be one of: `read` or `write`.
     */
    administration?: AppPermissionsAdministrationEnum;
    /**
     * The level of permission to grant the access token for checks on code. Can be one of: `read` or `write`.
     */
    checks?: AppPermissionsChecksEnum;
    /**
     * The level of permission to grant the access token for notification of content references and creation content attachments. Can be one of: `read` or `write`.
     */
    contentReferences?: AppPermissionsContentReferencesEnum;
    /**
     * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges. Can be one of: `read` or `write`.
     */
    contents?: AppPermissionsContentsEnum;
    /**
     * The level of permission to grant the access token for deployments and deployment statuses. Can be one of: `read` or `write`.
     */
    deployments?: AppPermissionsDeploymentsEnum;
    /**
     * The level of permission to grant the access token for managing repository environments. Can be one of: `read` or `write`.
     */
    environments?: AppPermissionsEnvironmentsEnum;
    /**
     * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones. Can be one of: `read` or `write`.
     */
    issues?: AppPermissionsIssuesEnum;
    /**
     * The level of permission to grant the access token for organization teams and members. Can be one of: `read` or `write`.
     */
    members?: AppPermissionsMembersEnum;
    /**
     * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata. Can be one of: `read` or `write`.
     */
    metadata?: AppPermissionsMetadataEnum;
    /**
     * The level of permission to grant the access token to manage access to an organization. Can be one of: `read` or `write`.
     */
    organizationAdministration?: AppPermissionsOrganizationAdministrationEnum;
    /**
     * The level of permission to grant the access token to manage the post-receive hooks for an organization. Can be one of: `read` or `write`.
     */
    organizationHooks?: AppPermissionsOrganizationHooksEnum;
    /**
     * The level of permission to grant the access token for organization packages published to GitHub Packages. Can be one of: `read` or `write`.
     */
    organizationPackages?: AppPermissionsOrganizationPackagesEnum;
    /**
     * The level of permission to grant the access token for viewing an organization's plan. Can be one of: `read`.
     */
    organizationPlan?: AppPermissionsOrganizationPlanEnum;
    /**
     * The level of permission to grant the access token to manage organization projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.
     */
    organizationProjects?: AppPermissionsOrganizationProjectsEnum;
    /**
     * The level of permission to grant the access token to manage organization secrets. Can be one of: `read` or `write`.
     */
    organizationSecrets?: AppPermissionsOrganizationSecretsEnum;
    /**
     * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization. Can be one of: `read` or `write`.
     */
    organizationSelfHostedRunners?: AppPermissionsOrganizationSelfHostedRunnersEnum;
    /**
     * The level of permission to grant the access token to view and manage users blocked by the organization. Can be one of: `read` or `write`.
     */
    organizationUserBlocking?: AppPermissionsOrganizationUserBlockingEnum;
    /**
     * The level of permission to grant the access token for packages published to GitHub Packages. Can be one of: `read` or `write`.
     */
    packages?: AppPermissionsPackagesEnum;
    /**
     * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds. Can be one of: `read` or `write`.
     */
    pages?: AppPermissionsPagesEnum;
    /**
     * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges. Can be one of: `read` or `write`.
     */
    pullRequests?: AppPermissionsPullRequestsEnum;
    /**
     * The level of permission to grant the access token to manage the post-receive hooks for a repository. Can be one of: `read` or `write`.
     */
    repositoryHooks?: AppPermissionsRepositoryHooksEnum;
    /**
     * The level of permission to grant the access token to manage repository projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.
     */
    repositoryProjects?: AppPermissionsRepositoryProjectsEnum;
    /**
     * The level of permission to grant the access token to view and manage secret scanning alerts. Can be one of: `read` or `write`.
     */
    secretScanningAlerts?: AppPermissionsSecretScanningAlertsEnum;
    /**
     * The level of permission to grant the access token to manage repository secrets. Can be one of: `read` or `write`.
     */
    secrets?: AppPermissionsSecretsEnum;
    /**
     * The level of permission to grant the access token to view and manage security events like code scanning alerts. Can be one of: `read` or `write`.
     */
    securityEvents?: AppPermissionsSecurityEventsEnum;
    /**
     * The level of permission to grant the access token to manage just a single file. Can be one of: `read` or `write`.
     */
    singleFile?: AppPermissionsSingleFileEnum;
    /**
     * The level of permission to grant the access token for commit statuses. Can be one of: `read` or `write`.
     */
    statuses?: AppPermissionsStatusesEnum;
    /**
     * The level of permission to grant the access token to manage team discussions and related comments. Can be one of: `read` or `write`.
     */
    teamDiscussions?: AppPermissionsTeamDiscussionsEnum;
    /**
     * The level of permission to grant the access token to retrieve Dependabot alerts. Can be one of: `read`.
     */
    vulnerabilityAlerts?: AppPermissionsVulnerabilityAlertsEnum;
    /**
     * The level of permission to grant the access token to update GitHub Actions workflow files. Can be one of: `write`.
     */
    workflows?: AppPermissionsWorkflowsEnum;
}
