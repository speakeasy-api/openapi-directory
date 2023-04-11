import { SpeakeasyBase } from "../../../internal/utils";
import { LoadPermissionListRequest } from "./loadpermissionlistrequest";
/**
 * Describes modifications to the load permissions of an Amazon FPGA image (AFI).
 */
export declare class LoadPermissionModifications extends SpeakeasyBase {
    add?: LoadPermissionListRequest[];
    remove?: LoadPermissionListRequest[];
}
