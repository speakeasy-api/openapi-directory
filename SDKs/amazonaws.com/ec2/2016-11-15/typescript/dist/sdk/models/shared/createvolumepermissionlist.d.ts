import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The group to be added or removed. The possible value is <code>all</code>.
 */
export declare enum CreateVolumePermissionListGroupEnum {
    All = "all"
}
/**
 * Describes the user or group to be added or removed from the list of create volume permissions for a volume.
 */
export declare class CreateVolumePermissionList extends SpeakeasyBase {
    group?: CreateVolumePermissionListGroupEnum;
    userId?: string;
}
