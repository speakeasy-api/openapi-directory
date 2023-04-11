import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMetric } from "./dimensionmetric";
import { EvaluationCycle } from "./evaluationcycle";
/**
 * This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.
 */
export declare class GetCustomerServiceMetricResponse extends SpeakeasyBase {
    /**
     * This container provides a seller's customer service metric performance for a given dimension. In the getCustomerServiceMetric request, specify values for the following request parameters to control the returned dimension and the associated metric values: customer_service_metric_type evaluation_type evaluation_marketplace_id
     */
    dimensionMetrics?: DimensionMetric[];
    /**
     * This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.
     */
    evaluationCycle?: EvaluationCycle;
    /**
     * The eBay marketplace ID of the marketplace upon which the customer service metric evaluation is based. The customer_service_metric resource supports a limited set of marketplaces. For a complete list of the supported marketplaces, please see the Service metrics policy page. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html'>eBay API documentation</a>
     */
    marketplaceId?: string;
}
