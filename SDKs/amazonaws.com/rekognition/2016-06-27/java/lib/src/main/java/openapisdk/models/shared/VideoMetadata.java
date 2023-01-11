package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoMetadata
 * Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.
**/
public class VideoMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Codec")
    public String codec;
    public VideoMetadata withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColorRange")
    public VideoColorRangeEnum colorRange;
    public VideoMetadata withColorRange(VideoColorRangeEnum colorRange) {
        this.colorRange = colorRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationMillis")
    public Long durationMillis;
    public VideoMetadata withDurationMillis(Long durationMillis) {
        this.durationMillis = durationMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public String format;
    public VideoMetadata withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FrameHeight")
    public Long frameHeight;
    public VideoMetadata withFrameHeight(Long frameHeight) {
        this.frameHeight = frameHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FrameRate")
    public Float frameRate;
    public VideoMetadata withFrameRate(Float frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FrameWidth")
    public Long frameWidth;
    public VideoMetadata withFrameWidth(Long frameWidth) {
        this.frameWidth = frameWidth;
        return this;
    }
}