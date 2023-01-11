package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteImageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Image")
    public Image image;
    public DeleteImageResult withImage(Image image) {
        this.image = image;
        return this;
    }
}