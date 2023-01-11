package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReportGroupsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListReportGroupsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListReportGroupsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortBy")
    public ReportGroupSortByTypeEnum sortBy;
    public ListReportGroupsInput withSortBy(ReportGroupSortByTypeEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SortOrderTypeEnum sortOrder;
    public ListReportGroupsInput withSortOrder(SortOrderTypeEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}