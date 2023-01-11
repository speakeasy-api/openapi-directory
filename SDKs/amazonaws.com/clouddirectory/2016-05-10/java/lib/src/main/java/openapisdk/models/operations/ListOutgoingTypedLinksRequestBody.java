package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOutgoingTypedLinksRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsistencyLevel")
    public ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum consistencyLevel;
    public ListOutgoingTypedLinksRequestBody withConsistencyLevel(ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum consistencyLevel) {
        this.consistencyLevel = consistencyLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterAttributeRanges")
    public openapisdk.models.shared.TypedLinkAttributeRange[] filterAttributeRanges;
    public ListOutgoingTypedLinksRequestBody withFilterAttributeRanges(openapisdk.models.shared.TypedLinkAttributeRange[] filterAttributeRanges) {
        this.filterAttributeRanges = filterAttributeRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterTypedLink")
    public ListOutgoingTypedLinksRequestBodyFilterTypedLink filterTypedLink;
    public ListOutgoingTypedLinksRequestBody withFilterTypedLink(ListOutgoingTypedLinksRequestBodyFilterTypedLink filterTypedLink) {
        this.filterTypedLink = filterTypedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListOutgoingTypedLinksRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListOutgoingTypedLinksRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ListOutgoingTypedLinksRequestBodyObjectReference objectReference;
    public ListOutgoingTypedLinksRequestBody withObjectReference(ListOutgoingTypedLinksRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}