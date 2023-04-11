import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetadata } from "./dimensionmetadata";
import { MetricMetadata } from "./metricmetadata";
/**
 * This type defines the fields included in the report.
 */
export declare class ReportMetadata extends SpeakeasyBase {
    /**
     * A list containing the metadata for the dimension used in the report.
     */
    dimensionMetadata?: DimensionMetadata[];
    /**
     * The maximum number of dimensions that can be requested for the specified report type.
     */
    maxNumberOfDimensionsToRequest?: number;
    /**
     * The maximum number of metrics that can be requested for the specified report type.
     */
    maxNumberOfMetricsToRequest?: number;
    /**
     * A list containing the metadata for the metrics in the report.
     */
    metricMetadata?: MetricMetadata[];
    /**
     * The <b>report_type</b>, as specified in the request to create the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a>
     */
    reportType?: string;
}
