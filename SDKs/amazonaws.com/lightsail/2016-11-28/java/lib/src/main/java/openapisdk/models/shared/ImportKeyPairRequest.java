package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImportKeyPairRequest {
    @JsonProperty("keyPairName")
    public String keyPairName;
    public ImportKeyPairRequest withKeyPairName(String keyPairName) {
        this.keyPairName = keyPairName;
        return this;
    }
    @JsonProperty("publicKeyBase64")
    public String publicKeyBase64;
    public ImportKeyPairRequest withPublicKeyBase64(String publicKeyBase64) {
        this.publicKeyBase64 = publicKeyBase64;
        return this;
    }
}