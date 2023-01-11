package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLaunchProfileRequestBodyStreamConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clipboardMode")
    public openapisdk.models.shared.StreamingClipboardModeEnum clipboardMode;
    public CreateLaunchProfileRequestBodyStreamConfiguration withClipboardMode(openapisdk.models.shared.StreamingClipboardModeEnum clipboardMode) {
        this.clipboardMode = clipboardMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceTypes")
    public openapisdk.models.shared.StreamingInstanceTypeEnum[] ec2InstanceTypes;
    public CreateLaunchProfileRequestBodyStreamConfiguration withEc2InstanceTypes(openapisdk.models.shared.StreamingInstanceTypeEnum[] ec2InstanceTypes) {
        this.ec2InstanceTypes = ec2InstanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSessionLengthInMinutes")
    public Long maxSessionLengthInMinutes;
    public CreateLaunchProfileRequestBodyStreamConfiguration withMaxSessionLengthInMinutes(Long maxSessionLengthInMinutes) {
        this.maxSessionLengthInMinutes = maxSessionLengthInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImageIds")
    public String[] streamingImageIds;
    public CreateLaunchProfileRequestBodyStreamConfiguration withStreamingImageIds(String[] streamingImageIds) {
        this.streamingImageIds = streamingImageIds;
        return this;
    }
}