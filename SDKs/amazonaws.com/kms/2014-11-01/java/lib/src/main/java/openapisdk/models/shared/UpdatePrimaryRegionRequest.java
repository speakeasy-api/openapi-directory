package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePrimaryRegionRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public UpdatePrimaryRegionRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("PrimaryRegion")
    public String primaryRegion;
    public UpdatePrimaryRegionRequest withPrimaryRegion(String primaryRegion) {
        this.primaryRegion = primaryRegion;
        return this;
    }
}