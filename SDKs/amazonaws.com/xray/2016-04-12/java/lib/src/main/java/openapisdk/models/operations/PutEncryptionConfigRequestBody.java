package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEncryptionConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public PutEncryptionConfigRequestBody withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("Type")
    public PutEncryptionConfigRequestBodyTypeEnum type;
    public PutEncryptionConfigRequestBody withType(PutEncryptionConfigRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}