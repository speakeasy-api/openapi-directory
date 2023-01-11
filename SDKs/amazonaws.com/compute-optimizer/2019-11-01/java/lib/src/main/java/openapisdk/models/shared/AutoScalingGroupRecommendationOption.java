package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoScalingGroupRecommendationOption
 * Describes a recommendation option for an Auto Scaling group.
**/
public class AutoScalingGroupRecommendationOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public AutoScalingGroupConfiguration configuration;
    public AutoScalingGroupRecommendationOption withConfiguration(AutoScalingGroupConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceRisk")
    public Double performanceRisk;
    public AutoScalingGroupRecommendationOption withPerformanceRisk(Double performanceRisk) {
        this.performanceRisk = performanceRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectedUtilizationMetrics")
    public UtilizationMetric[] projectedUtilizationMetrics;
    public AutoScalingGroupRecommendationOption withProjectedUtilizationMetrics(UtilizationMetric[] projectedUtilizationMetrics) {
        this.projectedUtilizationMetrics = projectedUtilizationMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public AutoScalingGroupRecommendationOption withRank(Long rank) {
        this.rank = rank;
        return this;
    }
}