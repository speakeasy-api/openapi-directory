import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name of the group.
 */
export declare enum LaunchPermissionListGroupEnum {
    All = "all"
}
/**
 * Describes a launch permission.
 */
export declare class LaunchPermissionList extends SpeakeasyBase {
    group?: LaunchPermissionListGroupEnum;
    organizationArn?: string;
    organizationalUnitArn?: string;
    userId?: string;
}
