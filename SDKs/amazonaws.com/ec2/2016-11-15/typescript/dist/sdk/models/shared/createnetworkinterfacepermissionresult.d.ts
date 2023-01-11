import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the state of the permission.
**/
export declare class CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState extends SpeakeasyBase {
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
/**
 * Information about the permission for the network interface.
**/
export declare class CreateNetworkInterfacePermissionResultInterfacePermission extends SpeakeasyBase {
    awsAccountId?: Record<string, any>;
    awsService?: Record<string, any>;
    networkInterfaceId?: Record<string, any>;
    networkInterfacePermissionId?: Record<string, any>;
    permission?: Record<string, any>;
    permissionState?: CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState;
}
/**
 * Contains the output of CreateNetworkInterfacePermission.
**/
export declare class CreateNetworkInterfacePermissionResult extends SpeakeasyBase {
    interfacePermission?: CreateNetworkInterfacePermissionResultInterfacePermission;
}
