import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAliasPermission } from "./connectionaliaspermission";
/**
 * Success
 */
export declare class DescribeConnectionAliasPermissionsResult extends SpeakeasyBase {
    aliasId?: string;
    connectionAliasPermissions?: ConnectionAliasPermission[];
    nextToken?: string;
}
