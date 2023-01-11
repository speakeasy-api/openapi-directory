package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAnomalyGroupTimeSeriesRequestBody {
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public ListAnomalyGroupTimeSeriesRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonProperty("AnomalyGroupId")
    public String anomalyGroupId;
    public ListAnomalyGroupTimeSeriesRequestBody withAnomalyGroupId(String anomalyGroupId) {
        this.anomalyGroupId = anomalyGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAnomalyGroupTimeSeriesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonProperty("MetricName")
    public String metricName;
    public ListAnomalyGroupTimeSeriesRequestBody withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAnomalyGroupTimeSeriesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}