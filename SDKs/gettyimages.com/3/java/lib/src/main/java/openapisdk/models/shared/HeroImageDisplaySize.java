package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HeroImageDisplaySize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_watermarked")
    public Boolean isWatermarked;
    public HeroImageDisplaySize withIsWatermarked(Boolean isWatermarked) {
        this.isWatermarked = isWatermarked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public HeroImageDisplaySize withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public HeroImageDisplaySize withUri(String uri) {
        this.uri = uri;
        return this;
    }
}