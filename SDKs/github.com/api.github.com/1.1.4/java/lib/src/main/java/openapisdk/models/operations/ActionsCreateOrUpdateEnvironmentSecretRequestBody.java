package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsCreateOrUpdateEnvironmentSecretRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encrypted_value")
    public String encryptedValue;
    public ActionsCreateOrUpdateEnvironmentSecretRequestBody withEncryptedValue(String encryptedValue) {
        this.encryptedValue = encryptedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key_id")
    public String keyId;
    public ActionsCreateOrUpdateEnvironmentSecretRequestBody withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}