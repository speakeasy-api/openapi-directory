import { SpeakeasyBase } from "../../../internal/utils";
/**
 * No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum DescribeGeofenceCollectionResponsePricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * Success
 */
export declare class DescribeGeofenceCollectionResponse extends SpeakeasyBase {
    collectionArn: string;
    collectionName: string;
    createTime: Date;
    description: string;
    kmsKeyId?: string;
    pricingPlan?: DescribeGeofenceCollectionResponsePricingPlanEnum;
    pricingPlanDataSource?: string;
    tags?: Record<string, string>;
    updateTime: Date;
}
