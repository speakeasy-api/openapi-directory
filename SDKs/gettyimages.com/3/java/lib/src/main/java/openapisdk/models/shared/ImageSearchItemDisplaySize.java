package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageSearchItemDisplaySize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_watermarked")
    public Boolean isWatermarked;
    public ImageSearchItemDisplaySize withIsWatermarked(Boolean isWatermarked) {
        this.isWatermarked = isWatermarked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImageSearchItemDisplaySize withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ImageSearchItemDisplaySize withUri(String uri) {
        this.uri = uri;
        return this;
    }
}