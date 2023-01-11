package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchTopics200ApplicationJson {
    @JsonProperty("incomplete_results")
    public Boolean incompleteResults;
    public SearchTopics200ApplicationJson withIncompleteResults(Boolean incompleteResults) {
        this.incompleteResults = incompleteResults;
        return this;
    }
    @JsonProperty("items")
    public openapisdk.models.shared.TopicSearchResultItem[] items;
    public SearchTopics200ApplicationJson withItems(openapisdk.models.shared.TopicSearchResultItem[] items) {
        this.items = items;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public SearchTopics200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}