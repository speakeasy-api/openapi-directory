package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Thumbnails
 * Thumbnails for videos.
**/
public class Thumbnails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AspectRatio")
    public String aspectRatio;
    public Thumbnails withAspectRatio(String aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public String format;
    public Thumbnails withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interval")
    public String interval;
    public Thumbnails withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxHeight")
    public String maxHeight;
    public Thumbnails withMaxHeight(String maxHeight) {
        this.maxHeight = maxHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxWidth")
    public String maxWidth;
    public Thumbnails withMaxWidth(String maxWidth) {
        this.maxWidth = maxWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaddingPolicy")
    public String paddingPolicy;
    public Thumbnails withPaddingPolicy(String paddingPolicy) {
        this.paddingPolicy = paddingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resolution")
    public String resolution;
    public Thumbnails withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizingPolicy")
    public String sizingPolicy;
    public Thumbnails withSizingPolicy(String sizingPolicy) {
        this.sizingPolicy = sizingPolicy;
        return this;
    }
}