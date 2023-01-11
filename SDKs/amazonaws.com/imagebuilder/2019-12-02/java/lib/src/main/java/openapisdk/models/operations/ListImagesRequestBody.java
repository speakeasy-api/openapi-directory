package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImagesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byName")
    public Boolean byName;
    public ListImagesRequestBody withByName(Boolean byName) {
        this.byName = byName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.Filter[] filters;
    public ListImagesRequestBody withFilters(openapisdk.models.shared.Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeDeprecated")
    public Boolean includeDeprecated;
    public ListImagesRequestBody withIncludeDeprecated(Boolean includeDeprecated) {
        this.includeDeprecated = includeDeprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListImagesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImagesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public ListImagesRequestBodyOwnerEnum owner;
    public ListImagesRequestBody withOwner(ListImagesRequestBodyOwnerEnum owner) {
        this.owner = owner;
        return this;
    }
}