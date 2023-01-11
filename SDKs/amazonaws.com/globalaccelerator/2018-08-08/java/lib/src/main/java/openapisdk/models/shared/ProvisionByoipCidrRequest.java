package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProvisionByoipCidrRequest {
    @JsonProperty("Cidr")
    public String cidr;
    public ProvisionByoipCidrRequest withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @JsonProperty("CidrAuthorizationContext")
    public CidrAuthorizationContext cidrAuthorizationContext;
    public ProvisionByoipCidrRequest withCidrAuthorizationContext(CidrAuthorizationContext cidrAuthorizationContext) {
        this.cidrAuthorizationContext = cidrAuthorizationContext;
        return this;
    }
}