package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EncryptRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionAlgorithm")
    public EncryptionAlgorithmSpecEnum encryptionAlgorithm;
    public EncryptRequest withEncryptionAlgorithm(EncryptionAlgorithmSpecEnum encryptionAlgorithm) {
        this.encryptionAlgorithm = encryptionAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionContext")
    public java.util.Map<String, String> encryptionContext;
    public EncryptRequest withEncryptionContext(java.util.Map<String, String> encryptionContext) {
        this.encryptionContext = encryptionContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantTokens")
    public String[] grantTokens;
    public EncryptRequest withGrantTokens(String[] grantTokens) {
        this.grantTokens = grantTokens;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public EncryptRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("Plaintext")
    public String plaintext;
    public EncryptRequest withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
}