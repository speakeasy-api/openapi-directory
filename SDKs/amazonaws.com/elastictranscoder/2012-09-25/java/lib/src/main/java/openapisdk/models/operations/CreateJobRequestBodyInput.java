package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobRequestBodyInput
 * Information about the file that you're transcoding.
**/
public class CreateJobRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AspectRatio")
    public String aspectRatio;
    public CreateJobRequestBodyInput withAspectRatio(String aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Container")
    public String container;
    public CreateJobRequestBodyInput withContainer(String container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetectedProperties")
    public openapisdk.models.shared.DetectedProperties detectedProperties;
    public CreateJobRequestBodyInput withDetectedProperties(openapisdk.models.shared.DetectedProperties detectedProperties) {
        this.detectedProperties = detectedProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encryption")
    public openapisdk.models.shared.Encryption encryption;
    public CreateJobRequestBodyInput withEncryption(openapisdk.models.shared.Encryption encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FrameRate")
    public String frameRate;
    public CreateJobRequestBodyInput withFrameRate(String frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputCaptions")
    public openapisdk.models.shared.InputCaptions inputCaptions;
    public CreateJobRequestBodyInput withInputCaptions(openapisdk.models.shared.InputCaptions inputCaptions) {
        this.inputCaptions = inputCaptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interlaced")
    public String interlaced;
    public CreateJobRequestBodyInput withInterlaced(String interlaced) {
        this.interlaced = interlaced;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public CreateJobRequestBodyInput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resolution")
    public String resolution;
    public CreateJobRequestBodyInput withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeSpan")
    public openapisdk.models.shared.TimeSpan timeSpan;
    public CreateJobRequestBodyInput withTimeSpan(openapisdk.models.shared.TimeSpan timeSpan) {
        this.timeSpan = timeSpan;
        return this;
    }
}