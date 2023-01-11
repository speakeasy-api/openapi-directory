package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListOutgoingTypedLinks
 * Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchListOutgoingTypedLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterAttributeRanges")
    public TypedLinkAttributeRange[] filterAttributeRanges;
    public BatchListOutgoingTypedLinks withFilterAttributeRanges(TypedLinkAttributeRange[] filterAttributeRanges) {
        this.filterAttributeRanges = filterAttributeRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterTypedLink")
    public TypedLinkSchemaAndFacetName filterTypedLink;
    public BatchListOutgoingTypedLinks withFilterTypedLink(TypedLinkSchemaAndFacetName filterTypedLink) {
        this.filterTypedLink = filterTypedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public BatchListOutgoingTypedLinks withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListOutgoingTypedLinks withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchListOutgoingTypedLinks withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}