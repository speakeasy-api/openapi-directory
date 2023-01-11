package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListQualificationTypesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListQualificationTypesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MustBeOwnedByCaller")
    public Boolean mustBeOwnedByCaller;
    public ListQualificationTypesRequest withMustBeOwnedByCaller(Boolean mustBeOwnedByCaller) {
        this.mustBeOwnedByCaller = mustBeOwnedByCaller;
        return this;
    }
    @JsonProperty("MustBeRequestable")
    public Boolean mustBeRequestable;
    public ListQualificationTypesRequest withMustBeRequestable(Boolean mustBeRequestable) {
        this.mustBeRequestable = mustBeRequestable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListQualificationTypesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Query")
    public String query;
    public ListQualificationTypesRequest withQuery(String query) {
        this.query = query;
        return this;
    }
}