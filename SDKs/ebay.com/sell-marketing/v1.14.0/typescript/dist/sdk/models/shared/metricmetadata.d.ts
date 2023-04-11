import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the name and data type of a metric.
 */
export declare class MetricMetadata extends SpeakeasyBase {
    /**
     * The data type of the returned metric value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a>
     */
    dataType?: string;
    /**
     * The name of the metric.
     */
    metricKey?: string;
}
