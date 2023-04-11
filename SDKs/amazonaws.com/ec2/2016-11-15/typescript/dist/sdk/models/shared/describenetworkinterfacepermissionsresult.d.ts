import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of permission.
 */
export declare enum DescribeNetworkInterfacePermissionsResultNetworkInterfacePermissionsPermissionEnum {
    InstanceAttach = "INSTANCE-ATTACH",
    EipAssociate = "EIP-ASSOCIATE"
}
/**
 * The state of the permission.
 */
export declare enum DescribeNetworkInterfacePermissionsResultNetworkInterfacePermissionsPermissionStateStateEnum {
    Pending = "pending",
    Granted = "granted",
    Revoking = "revoking",
    Revoked = "revoked"
}
/**
 * Information about the state of the permission.
 */
export declare class DescribeNetworkInterfacePermissionsResultNetworkInterfacePermissionsPermissionState extends SpeakeasyBase {
    state?: DescribeNetworkInterfacePermissionsResultNetworkInterfacePermissionsPermissionStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes a permission for a network interface.
 */
export declare class DescribeNetworkInterfacePermissionsResultNetworkInterfacePermissions extends SpeakeasyBase {
    awsAccountId?: string;
    awsService?: string;
    networkInterfaceId?: string;
    networkInterfacePermissionId?: string;
    permission?: DescribeNetworkInterfacePermissionsResultNetworkInterfacePermissionsPermissionEnum;
    permissionState?: DescribeNetworkInterfacePermissionsResultNetworkInterfacePermissionsPermissionState;
}
/**
 * Contains the output for DescribeNetworkInterfacePermissions.
 */
export declare class DescribeNetworkInterfacePermissionsResult extends SpeakeasyBase {
    networkInterfacePermissions?: DescribeNetworkInterfacePermissionsResultNetworkInterfacePermissions[];
    nextToken?: string;
}
