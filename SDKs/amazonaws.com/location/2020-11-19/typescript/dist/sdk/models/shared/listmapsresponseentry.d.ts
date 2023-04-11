import { SpeakeasyBase } from "../../../internal/utils";
/**
 * No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum ListMapsResponseEntryPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * Contains details of an existing map resource in your Amazon Web Services account.
 */
export declare class ListMapsResponseEntry extends SpeakeasyBase {
    createTime: Date;
    dataSource: string;
    description: string;
    mapName: string;
    pricingPlan?: ListMapsResponseEntryPricingPlanEnum;
    updateTime: Date;
}
