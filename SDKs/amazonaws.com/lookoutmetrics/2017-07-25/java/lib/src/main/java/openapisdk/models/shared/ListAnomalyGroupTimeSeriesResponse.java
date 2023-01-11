package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAnomalyGroupTimeSeriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyGroupId")
    public String anomalyGroupId;
    public ListAnomalyGroupTimeSeriesResponse withAnomalyGroupId(String anomalyGroupId) {
        this.anomalyGroupId = anomalyGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public String metricName;
    public ListAnomalyGroupTimeSeriesResponse withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAnomalyGroupTimeSeriesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeSeriesList")
    public TimeSeries[] timeSeriesList;
    public ListAnomalyGroupTimeSeriesResponse withTimeSeriesList(TimeSeries[] timeSeriesList) {
        this.timeSeriesList = timeSeriesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampList")
    public String[] timestampList;
    public ListAnomalyGroupTimeSeriesResponse withTimestampList(String[] timestampList) {
        this.timestampList = timestampList;
        return this;
    }
}