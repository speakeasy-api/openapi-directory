package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSharedReportGroupsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListSharedReportGroupsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSharedReportGroupsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortBy")
    public SharedResourceSortByTypeEnum sortBy;
    public ListSharedReportGroupsInput withSortBy(SharedResourceSortByTypeEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SortOrderTypeEnum sortOrder;
    public ListSharedReportGroupsInput withSortOrder(SortOrderTypeEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}