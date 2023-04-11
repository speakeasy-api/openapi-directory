import { SpeakeasyBase } from "../../../internal/utils";
import { DataLakePrincipal } from "./datalakeprincipal";
import { PermissionEnum } from "./permissionenum";
/**
 * Permissions granted to a principal.
 */
export declare class PrincipalPermissions extends SpeakeasyBase {
    permissions?: PermissionEnum[];
    principal?: DataLakePrincipal;
}
