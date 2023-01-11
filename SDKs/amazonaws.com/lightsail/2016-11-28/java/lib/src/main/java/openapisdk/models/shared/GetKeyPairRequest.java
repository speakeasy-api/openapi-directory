package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetKeyPairRequest {
    @JsonProperty("keyPairName")
    public String keyPairName;
    public GetKeyPairRequest withKeyPairName(String keyPairName) {
        this.keyPairName = keyPairName;
        return this;
    }
}