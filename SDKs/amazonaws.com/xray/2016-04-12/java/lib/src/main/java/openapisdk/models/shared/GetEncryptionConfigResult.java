package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEncryptionConfigResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfig")
    public EncryptionConfig encryptionConfig;
    public GetEncryptionConfigResult withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
}