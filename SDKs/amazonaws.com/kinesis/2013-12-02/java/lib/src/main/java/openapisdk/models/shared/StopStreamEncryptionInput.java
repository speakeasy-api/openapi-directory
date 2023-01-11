package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopStreamEncryptionInput {
    @JsonProperty("EncryptionType")
    public EncryptionTypeEnum encryptionType;
    public StopStreamEncryptionInput withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public StopStreamEncryptionInput withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public StopStreamEncryptionInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}