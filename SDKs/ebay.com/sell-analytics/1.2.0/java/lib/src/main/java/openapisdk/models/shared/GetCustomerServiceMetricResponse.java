package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCustomerServiceMetricResponse
 * This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.
**/
public class GetCustomerServiceMetricResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionMetrics")
    public DimensionMetric[] dimensionMetrics;
    public GetCustomerServiceMetricResponse withDimensionMetrics(DimensionMetric[] dimensionMetrics) {
        this.dimensionMetrics = dimensionMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationCycle")
    public EvaluationCycle evaluationCycle;
    public GetCustomerServiceMetricResponse withEvaluationCycle(EvaluationCycle evaluationCycle) {
        this.evaluationCycle = evaluationCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public GetCustomerServiceMetricResponse withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}