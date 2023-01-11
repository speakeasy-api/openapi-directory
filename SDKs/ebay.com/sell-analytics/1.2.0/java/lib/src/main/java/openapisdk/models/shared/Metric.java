package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metric
 * This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.
**/
public class Metric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benchmark")
    public MetricBenchmark benchmark;
    public Metric withBenchmark(MetricBenchmark benchmark) {
        this.benchmark = benchmark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributions")
    public MetricDistribution[] distributions;
    public Metric withDistributions(MetricDistribution[] distributions) {
        this.distributions = distributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricKey")
    public String metricKey;
    public Metric withMetricKey(String metricKey) {
        this.metricKey = metricKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Metric withValue(String value) {
        this.value = value;
        return this;
    }
}