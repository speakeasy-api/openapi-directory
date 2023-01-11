package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EncryptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CiphertextBlob")
    public String ciphertextBlob;
    public EncryptResponse withCiphertextBlob(String ciphertextBlob) {
        this.ciphertextBlob = ciphertextBlob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionAlgorithm")
    public EncryptionAlgorithmSpecEnum encryptionAlgorithm;
    public EncryptResponse withEncryptionAlgorithm(EncryptionAlgorithmSpecEnum encryptionAlgorithm) {
        this.encryptionAlgorithm = encryptionAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public EncryptResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}