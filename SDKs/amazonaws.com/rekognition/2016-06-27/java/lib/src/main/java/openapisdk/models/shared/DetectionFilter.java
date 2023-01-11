package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectionFilter
 * A set of parameters that allow you to filter out certain results from your returned results.
**/
public class DetectionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinBoundingBoxHeight")
    public Float minBoundingBoxHeight;
    public DetectionFilter withMinBoundingBoxHeight(Float minBoundingBoxHeight) {
        this.minBoundingBoxHeight = minBoundingBoxHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinBoundingBoxWidth")
    public Float minBoundingBoxWidth;
    public DetectionFilter withMinBoundingBoxWidth(Float minBoundingBoxWidth) {
        this.minBoundingBoxWidth = minBoundingBoxWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinConfidence")
    public Float minConfidence;
    public DetectionFilter withMinConfidence(Float minConfidence) {
        this.minConfidence = minConfidence;
        return this;
    }
}