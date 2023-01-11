package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchDevicesRequestBody {
    @JsonProperty("filters")
    public openapisdk.models.shared.SearchDevicesFilter[] filters;
    public SearchDevicesRequestBody withFilters(openapisdk.models.shared.SearchDevicesFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public SearchDevicesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchDevicesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}