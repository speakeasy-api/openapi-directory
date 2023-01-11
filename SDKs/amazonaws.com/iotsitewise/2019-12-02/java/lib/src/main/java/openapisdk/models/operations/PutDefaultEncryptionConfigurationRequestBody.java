package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutDefaultEncryptionConfigurationRequestBody {
    @JsonProperty("encryptionType")
    public PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum encryptionType;
    public PutDefaultEncryptionConfigurationRequestBody withEncryptionType(PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public PutDefaultEncryptionConfigurationRequestBody withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
}