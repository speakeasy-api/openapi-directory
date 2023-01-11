package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateFloatingIpRequestBodyReserveToRegion {
    @JsonProperty("region")
    public String region;
    public CreateFloatingIpRequestBodyReserveToRegion withRegion(String region) {
        this.region = region;
        return this;
    }
}