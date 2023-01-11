package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchCommits200ApplicationJson {
    @JsonProperty("incomplete_results")
    public Boolean incompleteResults;
    public SearchCommits200ApplicationJson withIncompleteResults(Boolean incompleteResults) {
        this.incompleteResults = incompleteResults;
        return this;
    }
    @JsonProperty("items")
    public openapisdk.models.shared.CommitSearchResultItem[] items;
    public SearchCommits200ApplicationJson withItems(openapisdk.models.shared.CommitSearchResultItem[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public SearchCommits200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}