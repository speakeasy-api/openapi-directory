package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListIncomingTypedLinks
 * Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchListIncomingTypedLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterAttributeRanges")
    public TypedLinkAttributeRange[] filterAttributeRanges;
    public BatchListIncomingTypedLinks withFilterAttributeRanges(TypedLinkAttributeRange[] filterAttributeRanges) {
        this.filterAttributeRanges = filterAttributeRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterTypedLink")
    public TypedLinkSchemaAndFacetName filterTypedLink;
    public BatchListIncomingTypedLinks withFilterTypedLink(TypedLinkSchemaAndFacetName filterTypedLink) {
        this.filterTypedLink = filterTypedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public BatchListIncomingTypedLinks withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListIncomingTypedLinks withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchListIncomingTypedLinks withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}