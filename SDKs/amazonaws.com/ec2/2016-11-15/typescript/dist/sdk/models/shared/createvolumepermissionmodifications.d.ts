import { SpeakeasyBase } from "../../../internal/utils";
import { CreateVolumePermissionList } from "./createvolumepermissionlist";
/**
 * Describes modifications to the list of create volume permissions for a volume.
 */
export declare class CreateVolumePermissionModifications extends SpeakeasyBase {
    add?: CreateVolumePermissionList[];
    remove?: CreateVolumePermissionList[];
}
