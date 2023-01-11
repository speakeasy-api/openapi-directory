package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRecommendationExportJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public JobFilter[] filters;
    public DescribeRecommendationExportJobsRequest withFilters(JobFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobIds")
    public String[] jobIds;
    public DescribeRecommendationExportJobsRequest withJobIds(String[] jobIds) {
        this.jobIds = jobIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeRecommendationExportJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeRecommendationExportJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}