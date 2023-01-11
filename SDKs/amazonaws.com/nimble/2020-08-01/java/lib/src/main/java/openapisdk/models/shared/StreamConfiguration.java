package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamConfiguration
 * A configuration for a streaming session.
**/
public class StreamConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clipboardMode")
    public StreamingClipboardModeEnum clipboardMode;
    public StreamConfiguration withClipboardMode(StreamingClipboardModeEnum clipboardMode) {
        this.clipboardMode = clipboardMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceTypes")
    public StreamingInstanceTypeEnum[] ec2InstanceTypes;
    public StreamConfiguration withEc2InstanceTypes(StreamingInstanceTypeEnum[] ec2InstanceTypes) {
        this.ec2InstanceTypes = ec2InstanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSessionLengthInMinutes")
    public Long maxSessionLengthInMinutes;
    public StreamConfiguration withMaxSessionLengthInMinutes(Long maxSessionLengthInMinutes) {
        this.maxSessionLengthInMinutes = maxSessionLengthInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImageIds")
    public String[] streamingImageIds;
    public StreamConfiguration withStreamingImageIds(String[] streamingImageIds) {
        this.streamingImageIds = streamingImageIds;
        return this;
    }
}