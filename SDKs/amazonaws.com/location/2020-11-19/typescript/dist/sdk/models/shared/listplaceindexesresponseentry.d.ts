import { SpeakeasyBase } from "../../../internal/utils";
/**
 * No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum ListPlaceIndexesResponseEntryPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * A place index resource listed in your Amazon Web Services account.
 */
export declare class ListPlaceIndexesResponseEntry extends SpeakeasyBase {
    createTime: Date;
    dataSource: string;
    description: string;
    indexName: string;
    pricingPlan?: ListPlaceIndexesResponseEntryPricingPlanEnum;
    updateTime: Date;
}
