package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDelegationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegations")
    public DelegationMetadata[] delegations;
    public GetDelegationsResponse withDelegations(DelegationMetadata[] delegations) {
        this.delegations = delegations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetDelegationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}