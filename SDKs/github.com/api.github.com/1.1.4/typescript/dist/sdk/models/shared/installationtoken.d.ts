import { SpeakeasyBase } from "../../../internal/utils";
import { AppPermissions } from "./apppermissions";
import { Repository } from "./repository";
export declare enum InstallationTokenRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
/**
 * Authentication token for a GitHub App installed on a user or org.
 */
export declare class InstallationToken extends SpeakeasyBase {
    expiresAt: string;
    hasMultipleSingleFiles?: boolean;
    /**
     * The permissions granted to the user-to-server access token.
     */
    permissions?: AppPermissions;
    repositories?: Repository[];
    repositorySelection?: InstallationTokenRepositorySelectionEnum;
    singleFile?: string;
    singleFilePaths?: string[];
    token: string;
}
