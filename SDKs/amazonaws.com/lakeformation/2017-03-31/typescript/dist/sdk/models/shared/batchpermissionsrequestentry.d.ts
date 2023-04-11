import { SpeakeasyBase } from "../../../internal/utils";
import { DataLakePrincipal } from "./datalakeprincipal";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";
/**
 * A permission to a resource granted by batch operation to the principal.
 */
export declare class BatchPermissionsRequestEntry extends SpeakeasyBase {
    id: string;
    permissions?: PermissionEnum[];
    permissionsWithGrantOption?: PermissionEnum[];
    principal?: DataLakePrincipal;
    resource?: Resource;
}
