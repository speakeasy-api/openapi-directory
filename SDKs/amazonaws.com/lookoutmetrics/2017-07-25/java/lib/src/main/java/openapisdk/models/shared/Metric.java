package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metric
 * A calculation made by contrasting a measure and a dimension from your source data.
**/
public class Metric {
    @JsonProperty("AggregationFunction")
    public AggregationFunctionEnum aggregationFunction;
    public Metric withAggregationFunction(AggregationFunctionEnum aggregationFunction) {
        this.aggregationFunction = aggregationFunction;
        return this;
    }
    @JsonProperty("MetricName")
    public String metricName;
    public Metric withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Namespace")
    public String namespace;
    public Metric withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}