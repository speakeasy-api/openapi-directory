package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchRepos200ApplicationJson {
    @JsonProperty("incomplete_results")
    public Boolean incompleteResults;
    public SearchRepos200ApplicationJson withIncompleteResults(Boolean incompleteResults) {
        this.incompleteResults = incompleteResults;
        return this;
    }
    @JsonProperty("items")
    public openapisdk.models.shared.RepoSearchResultItem[] items;
    public SearchRepos200ApplicationJson withItems(openapisdk.models.shared.RepoSearchResultItem[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public SearchRepos200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}