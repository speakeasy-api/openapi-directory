package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUsageStatisticsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterBy")
    public openapisdk.models.shared.UsageStatisticsFilter[] filterBy;
    public GetUsageStatisticsRequestBody withFilterBy(openapisdk.models.shared.UsageStatisticsFilter[] filterBy) {
        this.filterBy = filterBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetUsageStatisticsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetUsageStatisticsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortBy")
    public GetUsageStatisticsRequestBodySortBy sortBy;
    public GetUsageStatisticsRequestBody withSortBy(GetUsageStatisticsRequestBodySortBy sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public GetUsageStatisticsRequestBodyTimeRangeEnum timeRange;
    public GetUsageStatisticsRequestBody withTimeRange(GetUsageStatisticsRequestBodyTimeRangeEnum timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}