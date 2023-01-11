package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionMemoryRecommendationOption
 * Describes a recommendation option for an Lambda function.
**/
public class LambdaFunctionMemoryRecommendationOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memorySize")
    public Long memorySize;
    public LambdaFunctionMemoryRecommendationOption withMemorySize(Long memorySize) {
        this.memorySize = memorySize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectedUtilizationMetrics")
    public LambdaFunctionMemoryProjectedMetric[] projectedUtilizationMetrics;
    public LambdaFunctionMemoryRecommendationOption withProjectedUtilizationMetrics(LambdaFunctionMemoryProjectedMetric[] projectedUtilizationMetrics) {
        this.projectedUtilizationMetrics = projectedUtilizationMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public LambdaFunctionMemoryRecommendationOption withRank(Long rank) {
        this.rank = rank;
        return this;
    }
}