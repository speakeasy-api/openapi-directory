package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUpdatedImageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUpdateImage")
    public Boolean canUpdateImage;
    public CreateUpdatedImageResult withCanUpdateImage(Boolean canUpdateImage) {
        this.canUpdateImage = canUpdateImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public CreateUpdatedImageResult withImage(Image image) {
        this.image = image;
        return this;
    }
}