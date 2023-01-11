package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeprovisionByoipCidrRequest {
    @JsonProperty("Cidr")
    public String cidr;
    public DeprovisionByoipCidrRequest withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
}