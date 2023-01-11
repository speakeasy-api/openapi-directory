package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BehaviorCriteria
 * The criteria by which the behavior is determined to be normal.
**/
public class BehaviorCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonOperator")
    public ComparisonOperatorEnum comparisonOperator;
    public BehaviorCriteria withComparisonOperator(ComparisonOperatorEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consecutiveDatapointsToAlarm")
    public Long consecutiveDatapointsToAlarm;
    public BehaviorCriteria withConsecutiveDatapointsToAlarm(Long consecutiveDatapointsToAlarm) {
        this.consecutiveDatapointsToAlarm = consecutiveDatapointsToAlarm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consecutiveDatapointsToClear")
    public Long consecutiveDatapointsToClear;
    public BehaviorCriteria withConsecutiveDatapointsToClear(Long consecutiveDatapointsToClear) {
        this.consecutiveDatapointsToClear = consecutiveDatapointsToClear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationSeconds")
    public Long durationSeconds;
    public BehaviorCriteria withDurationSeconds(Long durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mlDetectionConfig")
    public MachineLearningDetectionConfig mlDetectionConfig;
    public BehaviorCriteria withMlDetectionConfig(MachineLearningDetectionConfig mlDetectionConfig) {
        this.mlDetectionConfig = mlDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statisticalThreshold")
    public StatisticalThreshold statisticalThreshold;
    public BehaviorCriteria withStatisticalThreshold(StatisticalThreshold statisticalThreshold) {
        this.statisticalThreshold = statisticalThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public MetricValue value;
    public BehaviorCriteria withValue(MetricValue value) {
        this.value = value;
        return this;
    }
}