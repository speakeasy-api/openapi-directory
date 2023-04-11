import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceConfiguration } from "./datasourceconfiguration";
/**
 * No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.
 */
export declare enum DescribePlaceIndexResponsePricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
/**
 * Success
 */
export declare class DescribePlaceIndexResponse extends SpeakeasyBase {
    createTime: Date;
    dataSource: string;
    dataSourceConfiguration: DataSourceConfiguration;
    description: string;
    indexArn: string;
    indexName: string;
    pricingPlan?: DescribePlaceIndexResponsePricingPlanEnum;
    tags?: Record<string, string>;
    updateTime: Date;
}
