package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPolicyAttachmentsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListPolicyAttachmentsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPolicyAttachmentsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("PolicyReference")
    public ListPolicyAttachmentsRequestBodyPolicyReference policyReference;
    public ListPolicyAttachmentsRequestBody withPolicyReference(ListPolicyAttachmentsRequestBodyPolicyReference policyReference) {
        this.policyReference = policyReference;
        return this;
    }
}