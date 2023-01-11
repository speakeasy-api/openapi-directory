package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMlTaskRunsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public TaskRunFilterCriteria filter;
    public GetMlTaskRunsRequest withFilter(TaskRunFilterCriteria filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetMlTaskRunsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetMlTaskRunsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sort")
    public TaskRunSortCriteria sort;
    public GetMlTaskRunsRequest withSort(TaskRunSortCriteria sort) {
        this.sort = sort;
        return this;
    }
    @JsonProperty("TransformId")
    public String transformId;
    public GetMlTaskRunsRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
}