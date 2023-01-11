package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageAttributesTheCropAreaWithinTheOriginalMediaAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Float height;
    public ImageAttributesTheCropAreaWithinTheOriginalMediaAsset withHeight(Float height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Float left;
    public ImageAttributesTheCropAreaWithinTheOriginalMediaAsset withLeft(Float left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Float top;
    public ImageAttributesTheCropAreaWithinTheOriginalMediaAsset withTop(Float top) {
        this.top = top;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Float width;
    public ImageAttributesTheCropAreaWithinTheOriginalMediaAsset withWidth(Float width) {
        this.width = width;
        return this;
    }
}