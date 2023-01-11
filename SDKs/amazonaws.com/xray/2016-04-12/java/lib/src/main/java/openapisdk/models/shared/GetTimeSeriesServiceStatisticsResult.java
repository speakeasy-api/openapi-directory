package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTimeSeriesServiceStatisticsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainsOldGroupVersions")
    public Boolean containsOldGroupVersions;
    public GetTimeSeriesServiceStatisticsResult withContainsOldGroupVersions(Boolean containsOldGroupVersions) {
        this.containsOldGroupVersions = containsOldGroupVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetTimeSeriesServiceStatisticsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeSeriesServiceStatistics")
    public TimeSeriesServiceStatistics[] timeSeriesServiceStatistics;
    public GetTimeSeriesServiceStatisticsResult withTimeSeriesServiceStatistics(TimeSeriesServiceStatistics[] timeSeriesServiceStatistics) {
        this.timeSeriesServiceStatistics = timeSeriesServiceStatistics;
        return this;
    }
}