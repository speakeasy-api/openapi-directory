package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaFunctionMemoryProjectedMetric
 * Describes a projected utilization metric of an Lambda function recommendation option.
**/
public class LambdaFunctionMemoryProjectedMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public LambdaFunctionMemoryMetricNameEnum name;
    public LambdaFunctionMemoryProjectedMetric withName(LambdaFunctionMemoryMetricNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistic")
    public LambdaFunctionMemoryMetricStatisticEnum statistic;
    public LambdaFunctionMemoryProjectedMetric withStatistic(LambdaFunctionMemoryMetricStatisticEnum statistic) {
        this.statistic = statistic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public LambdaFunctionMemoryProjectedMetric withValue(Double value) {
        this.value = value;
        return this;
    }
}