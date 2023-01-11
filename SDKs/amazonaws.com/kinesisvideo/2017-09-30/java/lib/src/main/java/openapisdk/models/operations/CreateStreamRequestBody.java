package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataRetentionInHours")
    public Long dataRetentionInHours;
    public CreateStreamRequestBody withDataRetentionInHours(Long dataRetentionInHours) {
        this.dataRetentionInHours = dataRetentionInHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceName")
    public String deviceName;
    public CreateStreamRequestBody withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public CreateStreamRequestBody withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaType")
    public String mediaType;
    public CreateStreamRequestBody withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public CreateStreamRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateStreamRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}