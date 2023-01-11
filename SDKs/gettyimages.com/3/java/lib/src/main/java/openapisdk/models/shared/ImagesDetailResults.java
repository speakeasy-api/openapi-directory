package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImagesDetailResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public Object images;
    public ImagesDetailResults withImages(Object images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images_not_found")
    public String[] imagesNotFound;
    public ImagesDetailResults withImagesNotFound(String[] imagesNotFound) {
        this.imagesNotFound = imagesNotFound;
        return this;
    }
}