package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetEntitlementsResult
 * The GetEntitlementsRequest contains results from the GetEntitlements operation.
**/
public class GetEntitlementsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Entitlements")
    public Entitlement[] entitlements;
    public GetEntitlementsResult withEntitlements(Entitlement[] entitlements) {
        this.entitlements = entitlements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetEntitlementsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}