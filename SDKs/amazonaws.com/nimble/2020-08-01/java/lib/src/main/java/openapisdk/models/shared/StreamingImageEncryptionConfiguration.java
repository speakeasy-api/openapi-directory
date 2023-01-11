package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StreamingImageEncryptionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyArn")
    public String keyArn;
    public StreamingImageEncryptionConfiguration withKeyArn(String keyArn) {
        this.keyArn = keyArn;
        return this;
    }
    @JsonProperty("keyType")
    public StreamingImageEncryptionConfigurationKeyTypeEnum keyType;
    public StreamingImageEncryptionConfiguration withKeyType(StreamingImageEncryptionConfigurationKeyTypeEnum keyType) {
        this.keyType = keyType;
        return this;
    }
}