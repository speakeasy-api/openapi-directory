package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DecryptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionAlgorithm")
    public EncryptionAlgorithmSpecEnum encryptionAlgorithm;
    public DecryptResponse withEncryptionAlgorithm(EncryptionAlgorithmSpecEnum encryptionAlgorithm) {
        this.encryptionAlgorithm = encryptionAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public DecryptResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Plaintext")
    public String plaintext;
    public DecryptResponse withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
}