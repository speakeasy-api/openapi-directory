import { SpeakeasyBase } from "../../../internal/utils";
import { MapConfiguration } from "./mapconfiguration";
/**
 * No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum DescribeMapResponsePricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * Success
 */
export declare class DescribeMapResponse extends SpeakeasyBase {
    configuration: MapConfiguration;
    createTime: Date;
    dataSource: string;
    description: string;
    mapArn: string;
    mapName: string;
    pricingPlan?: DescribeMapResponsePricingPlanEnum;
    tags?: Record<string, string>;
    updateTime: Date;
}
