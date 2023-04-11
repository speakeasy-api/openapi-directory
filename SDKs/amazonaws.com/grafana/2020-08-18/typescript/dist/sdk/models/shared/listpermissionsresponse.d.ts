import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionEntry } from "./permissionentry";
/**
 * Success
 */
export declare class ListPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions: PermissionEntry[];
}
