package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateDataKeyWithoutPlaintextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CiphertextBlob")
    public String ciphertextBlob;
    public GenerateDataKeyWithoutPlaintextResponse withCiphertextBlob(String ciphertextBlob) {
        this.ciphertextBlob = ciphertextBlob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public GenerateDataKeyWithoutPlaintextResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}