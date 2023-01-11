package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchFlowTemplatesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public FlowTemplateFilter[] filters;
    public SearchFlowTemplatesRequest withFilters(FlowTemplateFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public SearchFlowTemplatesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchFlowTemplatesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}