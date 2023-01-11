package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListObjectAttributesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FacetFilter")
    public ListObjectAttributesRequestBodyFacetFilter facetFilter;
    public ListObjectAttributesRequestBody withFacetFilter(ListObjectAttributesRequestBodyFacetFilter facetFilter) {
        this.facetFilter = facetFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListObjectAttributesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListObjectAttributesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ListObjectAttributesRequestBodyObjectReference objectReference;
    public ListObjectAttributesRequestBody withObjectReference(ListObjectAttributesRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}