import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class InstallationGhes2Permissions extends SpeakeasyBase {
    checks?: string;
    contents?: string;
    deployments?: string;
    issues?: string;
    metadata?: string;
    organizationAdministration?: string;
    pullRequests?: string;
    statuses?: string;
}
/**
 * Describe whether all repositories have been selected or there's a selection involved
 */
export declare enum InstallationGhes2RepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
/**
 * Installation
 */
export declare class InstallationGhes2 extends SpeakeasyBase {
    accessTokensUrl: string;
    account: any;
    appId: number;
    appSlug: string;
    contactEmail?: string;
    createdAt: Date;
    events: string[];
    htmlUrl: string;
    /**
     * The ID of the installation.
     */
    id: number;
    permissions: InstallationGhes2Permissions;
    repositoriesUrl: string;
    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    repositorySelection: InstallationGhes2RepositorySelectionEnum;
    singleFileName: string;
    suspendedAt?: Date;
    /**
     * Simple User
     */
    suspendedBy?: NullableSimpleUser;
    /**
     * The ID of the user or organization this token is being scoped to.
     */
    targetId: number;
    targetType: string;
    updatedAt: Date;
}
