import { SpeakeasyBase } from "../../../internal/utils";
import { AppPermissions } from "./apppermissions";
import { SimpleUser } from "./simpleuser";
/**
 * Describe whether all repositories have been selected or there's a selection involved
 */
export declare enum NullableScopedInstallationRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
export declare class NullableScopedInstallation extends SpeakeasyBase {
    /**
     * Simple User
     */
    account: SimpleUser;
    hasMultipleSingleFiles?: boolean;
    /**
     * The permissions granted to the user-to-server access token.
     */
    permissions: AppPermissions;
    repositoriesUrl: string;
    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    repositorySelection: NullableScopedInstallationRepositorySelectionEnum;
    singleFileName: string;
    singleFilePaths?: string[];
}
