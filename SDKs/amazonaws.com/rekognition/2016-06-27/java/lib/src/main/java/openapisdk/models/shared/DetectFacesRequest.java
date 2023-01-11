package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectFacesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public AttributeEnum[] attributes;
    public DetectFacesRequest withAttributes(AttributeEnum[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("Image")
    public Image image;
    public DetectFacesRequest withImage(Image image) {
        this.image = image;
        return this;
    }
}