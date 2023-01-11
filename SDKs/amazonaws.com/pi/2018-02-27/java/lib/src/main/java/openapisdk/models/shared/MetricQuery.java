package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricQuery
 * A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).
**/
public class MetricQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public java.util.Map<String, String> filter;
    public MetricQuery withFilter(java.util.Map<String, String> filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupBy")
    public DimensionGroup groupBy;
    public MetricQuery withGroupBy(DimensionGroup groupBy) {
        this.groupBy = groupBy;
        return this;
    }
    @JsonProperty("Metric")
    public String metric;
    public MetricQuery withMetric(String metric) {
        this.metric = metric;
        return this;
    }
}