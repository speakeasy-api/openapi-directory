package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Dimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dpi")
    public Integer dpi;
    public Dimensions withDpi(Integer dpi) {
        this.dpi = dpi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public Dimensions withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public Dimensions withWidth(Integer width) {
        this.width = width;
        return this;
    }
}