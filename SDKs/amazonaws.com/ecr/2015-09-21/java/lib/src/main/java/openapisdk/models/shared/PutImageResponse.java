package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public PutImageResponse withImage(Image image) {
        this.image = image;
        return this;
    }
}