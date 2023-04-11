import { SpeakeasyBase } from "../../../internal/utils";
import { AppPermissions } from "./apppermissions";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * Describe whether all repositories have been selected or there's a selection involved
 */
export declare enum InstallationRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
/**
 * Installation
 */
export declare class Installation extends SpeakeasyBase {
    accessTokensUrl: string;
    account: any;
    appId: number;
    appSlug: string;
    contactEmail?: string;
    createdAt: Date;
    events: string[];
    hasMultipleSingleFiles?: boolean;
    htmlUrl: string;
    /**
     * The ID of the installation.
     */
    id: number;
    /**
     * The permissions granted to the user-to-server access token.
     */
    permissions: AppPermissions;
    repositoriesUrl: string;
    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    repositorySelection: InstallationRepositorySelectionEnum;
    singleFileName: string;
    singleFilePaths?: string[];
    suspendedAt: Date;
    /**
     * A GitHub user.
     */
    suspendedBy: NullableSimpleUser;
    /**
     * The ID of the user or organization this token is being scoped to.
     */
    targetId: number;
    targetType: string;
    updatedAt: Date;
}
