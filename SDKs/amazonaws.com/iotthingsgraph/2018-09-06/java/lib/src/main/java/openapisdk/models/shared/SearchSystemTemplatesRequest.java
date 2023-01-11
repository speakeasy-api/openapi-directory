package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchSystemTemplatesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public SystemTemplateFilter[] filters;
    public SearchSystemTemplatesRequest withFilters(SystemTemplateFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public SearchSystemTemplatesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchSystemTemplatesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}