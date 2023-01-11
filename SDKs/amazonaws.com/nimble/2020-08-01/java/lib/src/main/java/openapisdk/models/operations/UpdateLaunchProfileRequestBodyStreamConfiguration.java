package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLaunchProfileRequestBodyStreamConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clipboardMode")
    public openapisdk.models.shared.StreamingClipboardModeEnum clipboardMode;
    public UpdateLaunchProfileRequestBodyStreamConfiguration withClipboardMode(openapisdk.models.shared.StreamingClipboardModeEnum clipboardMode) {
        this.clipboardMode = clipboardMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceTypes")
    public openapisdk.models.shared.StreamingInstanceTypeEnum[] ec2InstanceTypes;
    public UpdateLaunchProfileRequestBodyStreamConfiguration withEc2InstanceTypes(openapisdk.models.shared.StreamingInstanceTypeEnum[] ec2InstanceTypes) {
        this.ec2InstanceTypes = ec2InstanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSessionLengthInMinutes")
    public Long maxSessionLengthInMinutes;
    public UpdateLaunchProfileRequestBodyStreamConfiguration withMaxSessionLengthInMinutes(Long maxSessionLengthInMinutes) {
        this.maxSessionLengthInMinutes = maxSessionLengthInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImageIds")
    public String[] streamingImageIds;
    public UpdateLaunchProfileRequestBodyStreamConfiguration withStreamingImageIds(String[] streamingImageIds) {
        this.streamingImageIds = streamingImageIds;
        return this;
    }
}