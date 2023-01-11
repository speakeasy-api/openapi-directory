package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateDataKeyPairWithoutPlaintextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public GenerateDataKeyPairWithoutPlaintextResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyPairSpec")
    public DataKeyPairSpecEnum keyPairSpec;
    public GenerateDataKeyPairWithoutPlaintextResponse withKeyPairSpec(DataKeyPairSpecEnum keyPairSpec) {
        this.keyPairSpec = keyPairSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateKeyCiphertextBlob")
    public String privateKeyCiphertextBlob;
    public GenerateDataKeyPairWithoutPlaintextResponse withPrivateKeyCiphertextBlob(String privateKeyCiphertextBlob) {
        this.privateKeyCiphertextBlob = privateKeyCiphertextBlob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicKey")
    public String publicKey;
    public GenerateDataKeyPairWithoutPlaintextResponse withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}