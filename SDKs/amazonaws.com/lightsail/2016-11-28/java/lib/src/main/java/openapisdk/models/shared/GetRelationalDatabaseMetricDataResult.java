package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseMetricDataResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricData")
    public MetricDatapoint[] metricData;
    public GetRelationalDatabaseMetricDataResult withMetricData(MetricDatapoint[] metricData) {
        this.metricData = metricData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public RelationalDatabaseMetricNameEnum metricName;
    public GetRelationalDatabaseMetricDataResult withMetricName(RelationalDatabaseMetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
}