package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListObjectAttributes
 * Represents the output of a <a>ListObjectAttributes</a> operation.
**/
public class BatchListObjectAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FacetFilter")
    public SchemaFacet facetFilter;
    public BatchListObjectAttributes withFacetFilter(SchemaFacet facetFilter) {
        this.facetFilter = facetFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public BatchListObjectAttributes withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListObjectAttributes withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchListObjectAttributes withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}