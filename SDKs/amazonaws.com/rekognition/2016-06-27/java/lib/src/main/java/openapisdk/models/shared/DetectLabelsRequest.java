package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectLabelsRequest {
    @JsonProperty("Image")
    public Image image;
    public DetectLabelsRequest withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxLabels")
    public Long maxLabels;
    public DetectLabelsRequest withMaxLabels(Long maxLabels) {
        this.maxLabels = maxLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinConfidence")
    public Float minConfidence;
    public DetectLabelsRequest withMinConfidence(Float minConfidence) {
        this.minConfidence = minConfidence;
        return this;
    }
}