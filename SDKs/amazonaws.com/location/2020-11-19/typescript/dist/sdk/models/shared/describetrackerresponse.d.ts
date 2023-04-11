import { SpeakeasyBase } from "../../../internal/utils";
import { PositionFilteringEnum } from "./positionfilteringenum";
/**
 * Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum DescribeTrackerResponsePricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * Success
 */
export declare class DescribeTrackerResponse extends SpeakeasyBase {
    createTime: Date;
    description: string;
    kmsKeyId?: string;
    positionFiltering?: PositionFilteringEnum;
    pricingPlan?: DescribeTrackerResponsePricingPlanEnum;
    pricingPlanDataSource?: string;
    tags?: Record<string, string>;
    trackerArn: string;
    trackerName: string;
    updateTime: Date;
}
