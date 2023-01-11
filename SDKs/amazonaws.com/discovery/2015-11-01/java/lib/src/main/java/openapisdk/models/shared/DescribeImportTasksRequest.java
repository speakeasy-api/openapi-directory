package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeImportTasksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public ImportTaskFilter[] filters;
    public DescribeImportTasksRequest withFilters(ImportTaskFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeImportTasksRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeImportTasksRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}