package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WithdrawByoipCidrRequest {
    @JsonProperty("Cidr")
    public String cidr;
    public WithdrawByoipCidrRequest withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
}