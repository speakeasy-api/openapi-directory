import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum ListTrackersResponseEntryPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * Contains the tracker resource details.
 */
export declare class ListTrackersResponseEntry extends SpeakeasyBase {
    createTime: Date;
    description: string;
    pricingPlan?: ListTrackersResponseEntryPricingPlanEnum;
    pricingPlanDataSource?: string;
    trackerName: string;
    updateTime: Date;
}
