package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSlotsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.SlotFilter[] filters;
    public ListSlotsRequestBody withFilters(openapisdk.models.shared.SlotFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListSlotsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSlotsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortBy")
    public ListSlotsRequestBodySortBy sortBy;
    public ListSlotsRequestBody withSortBy(ListSlotsRequestBodySortBy sortBy) {
        this.sortBy = sortBy;
        return this;
    }
}