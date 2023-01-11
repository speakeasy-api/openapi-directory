package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEc2RecommendationProjectedMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendedOptionProjectedMetrics")
    public RecommendedOptionProjectedMetric[] recommendedOptionProjectedMetrics;
    public GetEc2RecommendationProjectedMetricsResponse withRecommendedOptionProjectedMetrics(RecommendedOptionProjectedMetric[] recommendedOptionProjectedMetrics) {
        this.recommendedOptionProjectedMetrics = recommendedOptionProjectedMetrics;
        return this;
    }
}