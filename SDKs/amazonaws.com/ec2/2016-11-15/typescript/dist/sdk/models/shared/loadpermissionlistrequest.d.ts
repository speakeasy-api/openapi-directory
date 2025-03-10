import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionGroupEnum } from "./permissiongroupenum";
/**
 * Describes a load permission.
 */
export declare class LoadPermissionListRequest extends SpeakeasyBase {
    group?: PermissionGroupEnum;
    userId?: string;
}
