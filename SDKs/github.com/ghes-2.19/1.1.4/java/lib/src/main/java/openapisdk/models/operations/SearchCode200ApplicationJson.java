package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchCode200ApplicationJson {
    @JsonProperty("incomplete_results")
    public Boolean incompleteResults;
    public SearchCode200ApplicationJson withIncompleteResults(Boolean incompleteResults) {
        this.incompleteResults = incompleteResults;
        return this;
    }
    @JsonProperty("items")
    public openapisdk.models.shared.CodeSearchResultItem[] items;
    public SearchCode200ApplicationJson withItems(openapisdk.models.shared.CodeSearchResultItem[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public SearchCode200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}