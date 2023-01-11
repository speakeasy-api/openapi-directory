package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchIssuesAndPullRequests200ApplicationJson {
    @JsonProperty("incomplete_results")
    public Boolean incompleteResults;
    public SearchIssuesAndPullRequests200ApplicationJson withIncompleteResults(Boolean incompleteResults) {
        this.incompleteResults = incompleteResults;
        return this;
    }
    @JsonProperty("items")
    public openapisdk.models.shared.IssueSearchResultItem[] items;
    public SearchIssuesAndPullRequests200ApplicationJson withItems(openapisdk.models.shared.IssueSearchResultItem[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public SearchIssuesAndPullRequests200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}