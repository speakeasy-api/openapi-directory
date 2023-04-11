import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum ListRouteCalculatorsResponseEntryPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * A route calculator resource listed in your Amazon Web Services account.
 */
export declare class ListRouteCalculatorsResponseEntry extends SpeakeasyBase {
    calculatorName: string;
    createTime: Date;
    dataSource: string;
    description: string;
    pricingPlan?: ListRouteCalculatorsResponseEntryPricingPlanEnum;
    updateTime: Date;
}
