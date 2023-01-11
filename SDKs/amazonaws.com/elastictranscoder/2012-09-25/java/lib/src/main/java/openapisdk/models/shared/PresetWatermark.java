package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PresetWatermark
 * <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>
**/
public class PresetWatermark {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HorizontalAlign")
    public String horizontalAlign;
    public PresetWatermark withHorizontalAlign(String horizontalAlign) {
        this.horizontalAlign = horizontalAlign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HorizontalOffset")
    public String horizontalOffset;
    public PresetWatermark withHorizontalOffset(String horizontalOffset) {
        this.horizontalOffset = horizontalOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public PresetWatermark withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxHeight")
    public String maxHeight;
    public PresetWatermark withMaxHeight(String maxHeight) {
        this.maxHeight = maxHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxWidth")
    public String maxWidth;
    public PresetWatermark withMaxWidth(String maxWidth) {
        this.maxWidth = maxWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Opacity")
    public String opacity;
    public PresetWatermark withOpacity(String opacity) {
        this.opacity = opacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizingPolicy")
    public String sizingPolicy;
    public PresetWatermark withSizingPolicy(String sizingPolicy) {
        this.sizingPolicy = sizingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Target")
    public String target;
    public PresetWatermark withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerticalAlign")
    public String verticalAlign;
    public PresetWatermark withVerticalAlign(String verticalAlign) {
        this.verticalAlign = verticalAlign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerticalOffset")
    public String verticalOffset;
    public PresetWatermark withVerticalOffset(String verticalOffset) {
        this.verticalOffset = verticalOffset;
        return this;
    }
}