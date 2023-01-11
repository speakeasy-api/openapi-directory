package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStreamRequestBody {
    @JsonProperty("CurrentVersion")
    public String currentVersion;
    public UpdateStreamRequestBody withCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceName")
    public String deviceName;
    public UpdateStreamRequestBody withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaType")
    public String mediaType;
    public UpdateStreamRequestBody withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public UpdateStreamRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public UpdateStreamRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}