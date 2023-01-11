package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteKeyPairRequest {
    @JsonProperty("keyPairName")
    public String keyPairName;
    public DeleteKeyPairRequest withKeyPairName(String keyPairName) {
        this.keyPairName = keyPairName;
        return this;
    }
}