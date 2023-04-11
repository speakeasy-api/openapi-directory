import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DeleteNetworkInterfacePermission.
 */
export declare class DeleteNetworkInterfacePermissionRequest extends SpeakeasyBase {
    dryRun?: boolean;
    force?: boolean;
    networkInterfacePermissionId: string;
}
