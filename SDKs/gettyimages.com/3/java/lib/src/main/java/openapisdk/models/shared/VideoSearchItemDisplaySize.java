package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoSearchItemDisplaySize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspect_ratio")
    public String aspectRatio;
    public VideoSearchItemDisplaySize withAspectRatio(String aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_watermarked")
    public Boolean isWatermarked;
    public VideoSearchItemDisplaySize withIsWatermarked(Boolean isWatermarked) {
        this.isWatermarked = isWatermarked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VideoSearchItemDisplaySize withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public VideoSearchItemDisplaySize withUri(String uri) {
        this.uri = uri;
        return this;
    }
}