package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RecognizeCelebritiesRequest {
    @JsonProperty("Image")
    public Image image;
    public RecognizeCelebritiesRequest withImage(Image image) {
        this.image = image;
        return this;
    }
}