package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EbsUtilizationMetric
 * <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
**/
public class EbsUtilizationMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public EbsMetricNameEnum name;
    public EbsUtilizationMetric withName(EbsMetricNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistic")
    public MetricStatisticEnum statistic;
    public EbsUtilizationMetric withStatistic(MetricStatisticEnum statistic) {
        this.statistic = statistic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public EbsUtilizationMetric withValue(Double value) {
        this.value = value;
        return this;
    }
}