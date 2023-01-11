package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFiltersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public FilterSummary[] filters;
    public ListFiltersResponse withFilters(FilterSummary[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFiltersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}