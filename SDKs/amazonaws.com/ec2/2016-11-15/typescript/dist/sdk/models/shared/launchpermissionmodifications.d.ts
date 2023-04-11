import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchPermissionList } from "./launchpermissionlist";
/**
 * Describes a launch permission modification.
 */
export declare class LaunchPermissionModifications extends SpeakeasyBase {
    add?: LaunchPermissionList[];
    remove?: LaunchPermissionList[];
}
