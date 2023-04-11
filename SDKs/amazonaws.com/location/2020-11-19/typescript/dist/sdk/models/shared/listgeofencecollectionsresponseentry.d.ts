import { SpeakeasyBase } from "../../../internal/utils";
/**
 * No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum ListGeofenceCollectionsResponseEntryPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * Contains the geofence collection details.
 */
export declare class ListGeofenceCollectionsResponseEntry extends SpeakeasyBase {
    collectionName: string;
    createTime: Date;
    description: string;
    pricingPlan?: ListGeofenceCollectionsResponseEntryPricingPlanEnum;
    pricingPlanDataSource?: string;
    updateTime: Date;
}
