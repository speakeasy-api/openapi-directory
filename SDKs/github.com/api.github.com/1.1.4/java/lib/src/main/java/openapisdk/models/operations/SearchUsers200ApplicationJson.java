package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchUsers200ApplicationJson {
    @JsonProperty("incomplete_results")
    public Boolean incompleteResults;
    public SearchUsers200ApplicationJson withIncompleteResults(Boolean incompleteResults) {
        this.incompleteResults = incompleteResults;
        return this;
    }
    @JsonProperty("items")
    public openapisdk.models.shared.UserSearchResultItem[] items;
    public SearchUsers200ApplicationJson withItems(openapisdk.models.shared.UserSearchResultItem[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public SearchUsers200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}