import { SpeakeasyBase } from "../../../internal/utils";
import { DataLakePrincipal } from "./datalakeprincipal";
import { DetailsMap } from "./detailsmap";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";
/**
 * The permissions granted or revoked on a resource.
 */
export declare class PrincipalResourcePermissions extends SpeakeasyBase {
    additionalDetails?: DetailsMap;
    permissions?: PermissionEnum[];
    permissionsWithGrantOption?: PermissionEnum[];
    principal?: DataLakePrincipal;
    resource?: Resource;
}
