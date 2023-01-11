package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectTextRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public DetectTextFilters filters;
    public DetectTextRequest withFilters(DetectTextFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("Image")
    public Image image;
    public DetectTextRequest withImage(Image image) {
        this.image = image;
        return this;
    }
}