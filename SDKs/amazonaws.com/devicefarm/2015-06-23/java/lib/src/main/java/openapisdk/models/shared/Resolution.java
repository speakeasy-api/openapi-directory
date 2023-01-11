package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resolution
 * Represents the screen resolution of a device in height and width, expressed in pixels.
**/
public class Resolution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public Resolution withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public Resolution withWidth(Long width) {
        this.width = width;
        return this;
    }
}