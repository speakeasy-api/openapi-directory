package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePresetRequestBodyVideo
 * The <code>VideoParameters</code> structure.
**/
public class CreatePresetRequestBodyVideo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AspectRatio")
    public String aspectRatio;
    public CreatePresetRequestBodyVideo withAspectRatio(String aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BitRate")
    public String bitRate;
    public CreatePresetRequestBodyVideo withBitRate(String bitRate) {
        this.bitRate = bitRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Codec")
    public String codec;
    public CreatePresetRequestBodyVideo withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodecOptions")
    public java.util.Map<String, String> codecOptions;
    public CreatePresetRequestBodyVideo withCodecOptions(java.util.Map<String, String> codecOptions) {
        this.codecOptions = codecOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayAspectRatio")
    public String displayAspectRatio;
    public CreatePresetRequestBodyVideo withDisplayAspectRatio(String displayAspectRatio) {
        this.displayAspectRatio = displayAspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FixedGOP")
    public String fixedGOP;
    public CreatePresetRequestBodyVideo withFixedGop(String fixedGOP) {
        this.fixedGOP = fixedGOP;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FrameRate")
    public String frameRate;
    public CreatePresetRequestBodyVideo withFrameRate(String frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyframesMaxDist")
    public String keyframesMaxDist;
    public CreatePresetRequestBodyVideo withKeyframesMaxDist(String keyframesMaxDist) {
        this.keyframesMaxDist = keyframesMaxDist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxFrameRate")
    public String maxFrameRate;
    public CreatePresetRequestBodyVideo withMaxFrameRate(String maxFrameRate) {
        this.maxFrameRate = maxFrameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxHeight")
    public String maxHeight;
    public CreatePresetRequestBodyVideo withMaxHeight(String maxHeight) {
        this.maxHeight = maxHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxWidth")
    public String maxWidth;
    public CreatePresetRequestBodyVideo withMaxWidth(String maxWidth) {
        this.maxWidth = maxWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaddingPolicy")
    public String paddingPolicy;
    public CreatePresetRequestBodyVideo withPaddingPolicy(String paddingPolicy) {
        this.paddingPolicy = paddingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resolution")
    public String resolution;
    public CreatePresetRequestBodyVideo withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizingPolicy")
    public String sizingPolicy;
    public CreatePresetRequestBodyVideo withSizingPolicy(String sizingPolicy) {
        this.sizingPolicy = sizingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Watermarks")
    public openapisdk.models.shared.PresetWatermark[] watermarks;
    public CreatePresetRequestBodyVideo withWatermarks(openapisdk.models.shared.PresetWatermark[] watermarks) {
        this.watermarks = watermarks;
        return this;
    }
}