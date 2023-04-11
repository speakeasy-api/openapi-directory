import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The group to be added or removed. The possible value is <code>all</code>.
 */
export declare enum DescribeSnapshotAttributeResultCreateVolumePermissionsGroupEnum {
    All = "all"
}
/**
 * Describes the user or group to be added or removed from the list of create volume permissions for a volume.
 */
export declare class DescribeSnapshotAttributeResultCreateVolumePermissions extends SpeakeasyBase {
    group?: DescribeSnapshotAttributeResultCreateVolumePermissionsGroupEnum;
    userId?: string;
}
/**
 * The type of product code.
 */
export declare enum DescribeSnapshotAttributeResultProductCodesProductCodeTypeEnum {
    Devpay = "devpay",
    Marketplace = "marketplace"
}
/**
 * Describes a product code.
 */
export declare class DescribeSnapshotAttributeResultProductCodes extends SpeakeasyBase {
    productCodeId?: string;
    productCodeType?: DescribeSnapshotAttributeResultProductCodesProductCodeTypeEnum;
}
/**
 * Success
 */
export declare class DescribeSnapshotAttributeResult extends SpeakeasyBase {
    createVolumePermissions?: DescribeSnapshotAttributeResultCreateVolumePermissions[];
    productCodes?: DescribeSnapshotAttributeResultProductCodes[];
    snapshotId?: string;
}
