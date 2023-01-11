package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateDataKeyPairRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionContext")
    public java.util.Map<String, String> encryptionContext;
    public GenerateDataKeyPairRequest withEncryptionContext(java.util.Map<String, String> encryptionContext) {
        this.encryptionContext = encryptionContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantTokens")
    public String[] grantTokens;
    public GenerateDataKeyPairRequest withGrantTokens(String[] grantTokens) {
        this.grantTokens = grantTokens;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public GenerateDataKeyPairRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("KeyPairSpec")
    public DataKeyPairSpecEnum keyPairSpec;
    public GenerateDataKeyPairRequest withKeyPairSpec(DataKeyPairSpecEnum keyPairSpec) {
        this.keyPairSpec = keyPairSpec;
        return this;
    }
}