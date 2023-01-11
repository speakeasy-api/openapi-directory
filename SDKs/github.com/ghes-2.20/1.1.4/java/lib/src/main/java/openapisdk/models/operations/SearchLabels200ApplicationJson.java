package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchLabels200ApplicationJson {
    @JsonProperty("incomplete_results")
    public Boolean incompleteResults;
    public SearchLabels200ApplicationJson withIncompleteResults(Boolean incompleteResults) {
        this.incompleteResults = incompleteResults;
        return this;
    }
    @JsonProperty("items")
    public openapisdk.models.shared.LabelSearchResultItem[] items;
    public SearchLabels200ApplicationJson withItems(openapisdk.models.shared.LabelSearchResultItem[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public SearchLabels200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}