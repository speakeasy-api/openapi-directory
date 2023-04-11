import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum DescribeRouteCalculatorResponsePricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * Success
 */
export declare class DescribeRouteCalculatorResponse extends SpeakeasyBase {
    calculatorArn: string;
    calculatorName: string;
    createTime: Date;
    dataSource: string;
    description: string;
    pricingPlan?: DescribeRouteCalculatorResponsePricingPlanEnum;
    tags?: Record<string, string>;
    updateTime: Date;
}
