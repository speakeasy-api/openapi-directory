package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frames")
    public String frames;
    public Image withFrames(String frames) {
        this.frames = frames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public String height;
    public Image withHeight(String height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mp4")
    public String mp4;
    public Image withMp4(String mp4) {
        this.mp4 = mp4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mp4_size")
    public String mp4Size;
    public Image withMp4Size(String mp4Size) {
        this.mp4Size = mp4Size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public Image withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Image withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webp")
    public String webp;
    public Image withWebp(String webp) {
        this.webp = webp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webp_size")
    public String webpSize;
    public Image withWebpSize(String webpSize) {
        this.webpSize = webpSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public String width;
    public Image withWidth(String width) {
        this.width = width;
        return this;
    }
}