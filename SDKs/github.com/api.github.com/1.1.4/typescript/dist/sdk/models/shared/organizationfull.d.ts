import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrganizationFullPlan extends SpeakeasyBase {
    filledSeats?: number;
    name: string;
    privateRepos: number;
    seats?: number;
    space: number;
}
/**
 * Organization Full
 */
export declare class OrganizationFull extends SpeakeasyBase {
    /**
     * Whether GitHub Advanced Security is enabled for new repositories and repositories transferred to this organization.
     *
     * @remarks
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    advancedSecurityEnabledForNewRepositories?: boolean;
    avatarUrl: string;
    billingEmail?: string;
    blog?: string;
    collaborators?: number;
    company?: string;
    createdAt: Date;
    defaultRepositoryPermission?: string;
    /**
     * Whether GitHub Advanced Security is automatically enabled for new repositories and repositories transferred to
     *
     * @remarks
     * this organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    dependabotAlertsEnabledForNewRepositories?: boolean;
    /**
     * Whether dependabot security updates are automatically enabled for new repositories and repositories transferred
     *
     * @remarks
     * to this organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    dependabotSecurityUpdatesEnabledForNewRepositories?: boolean;
    /**
     * Whether dependency graph is automatically enabled for new repositories and repositories transferred to this
     *
     * @remarks
     * organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    dependencyGraphEnabledForNewRepositories?: boolean;
    description: string;
    diskUsage?: number;
    email?: string;
    eventsUrl: string;
    followers: number;
    following: number;
    hasOrganizationProjects: boolean;
    hasRepositoryProjects: boolean;
    hooksUrl: string;
    htmlUrl: string;
    id: number;
    isVerified?: boolean;
    issuesUrl: string;
    location?: string;
    login: string;
    membersAllowedRepositoryCreationType?: string;
    membersCanCreateInternalRepositories?: boolean;
    membersCanCreatePages?: boolean;
    membersCanCreatePrivatePages?: boolean;
    membersCanCreatePrivateRepositories?: boolean;
    membersCanCreatePublicPages?: boolean;
    membersCanCreatePublicRepositories?: boolean;
    membersCanCreateRepositories?: boolean;
    membersCanForkPrivateRepositories?: boolean;
    membersUrl: string;
    name?: string;
    nodeId: string;
    ownedPrivateRepos?: number;
    plan?: OrganizationFullPlan;
    privateGists?: number;
    publicGists: number;
    publicMembersUrl: string;
    publicRepos: number;
    reposUrl: string;
    /**
     * Whether secret scanning is automatically enabled for new repositories and repositories transferred to this
     *
     * @remarks
     * organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    secretScanningEnabledForNewRepositories?: boolean;
    /**
     * An optional URL string to display to contributors who are blocked from pushing a secret.
     */
    secretScanningPushProtectionCustomLink?: string;
    /**
     * Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.
     */
    secretScanningPushProtectionCustomLinkEnabled?: boolean;
    /**
     * Whether secret scanning push protection is automatically enabled for new repositories and repositories
     *
     * @remarks
     * transferred to this organization.
     *
     * This field is only visible to organization owners or members of a team with the security manager role.
     */
    secretScanningPushProtectionEnabledForNewRepositories?: boolean;
    totalPrivateRepos?: number;
    twitterUsername?: string;
    twoFactorRequirementEnabled?: boolean;
    type: string;
    updatedAt: Date;
    url: string;
    webCommitSignoffRequired?: boolean;
}
