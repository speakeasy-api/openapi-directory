package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartStreamEncryptionInput {
    @JsonProperty("EncryptionType")
    public EncryptionTypeEnum encryptionType;
    public StartStreamEncryptionInput withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public StartStreamEncryptionInput withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public StartStreamEncryptionInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}