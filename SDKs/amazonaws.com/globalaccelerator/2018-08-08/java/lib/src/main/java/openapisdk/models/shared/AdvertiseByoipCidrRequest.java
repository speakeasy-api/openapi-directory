package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AdvertiseByoipCidrRequest {
    @JsonProperty("Cidr")
    public String cidr;
    public AdvertiseByoipCidrRequest withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
}