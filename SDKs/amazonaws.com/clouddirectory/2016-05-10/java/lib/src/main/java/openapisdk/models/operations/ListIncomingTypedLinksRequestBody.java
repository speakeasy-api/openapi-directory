package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIncomingTypedLinksRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsistencyLevel")
    public ListIncomingTypedLinksRequestBodyConsistencyLevelEnum consistencyLevel;
    public ListIncomingTypedLinksRequestBody withConsistencyLevel(ListIncomingTypedLinksRequestBodyConsistencyLevelEnum consistencyLevel) {
        this.consistencyLevel = consistencyLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterAttributeRanges")
    public openapisdk.models.shared.TypedLinkAttributeRange[] filterAttributeRanges;
    public ListIncomingTypedLinksRequestBody withFilterAttributeRanges(openapisdk.models.shared.TypedLinkAttributeRange[] filterAttributeRanges) {
        this.filterAttributeRanges = filterAttributeRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterTypedLink")
    public ListIncomingTypedLinksRequestBodyFilterTypedLink filterTypedLink;
    public ListIncomingTypedLinksRequestBody withFilterTypedLink(ListIncomingTypedLinksRequestBodyFilterTypedLink filterTypedLink) {
        this.filterTypedLink = filterTypedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListIncomingTypedLinksRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIncomingTypedLinksRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ListIncomingTypedLinksRequestBodyObjectReference objectReference;
    public ListIncomingTypedLinksRequestBody withObjectReference(ListIncomingTypedLinksRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}