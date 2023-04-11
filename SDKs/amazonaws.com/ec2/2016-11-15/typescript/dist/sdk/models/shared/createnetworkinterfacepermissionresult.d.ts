import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of permission.
 */
export declare enum CreateNetworkInterfacePermissionResultInterfacePermissionPermissionEnum {
    InstanceAttach = "INSTANCE-ATTACH",
    EipAssociate = "EIP-ASSOCIATE"
}
/**
 * The state of the permission.
 */
export declare enum CreateNetworkInterfacePermissionResultInterfacePermissionPermissionStateStateEnum {
    Pending = "pending",
    Granted = "granted",
    Revoking = "revoking",
    Revoked = "revoked"
}
/**
 * Information about the state of the permission.
 */
export declare class CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState extends SpeakeasyBase {
    state?: CreateNetworkInterfacePermissionResultInterfacePermissionPermissionStateStateEnum;
    statusMessage?: string;
}
/**
 * Information about the permission for the network interface.
 */
export declare class CreateNetworkInterfacePermissionResultInterfacePermission extends SpeakeasyBase {
    awsAccountId?: string;
    awsService?: string;
    networkInterfaceId?: string;
    networkInterfacePermissionId?: string;
    permission?: CreateNetworkInterfacePermissionResultInterfacePermissionPermissionEnum;
    permissionState?: CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState;
}
/**
 * Contains the output of CreateNetworkInterfacePermission.
 */
export declare class CreateNetworkInterfacePermissionResult extends SpeakeasyBase {
    interfacePermission?: CreateNetworkInterfacePermissionResultInterfacePermission;
}
