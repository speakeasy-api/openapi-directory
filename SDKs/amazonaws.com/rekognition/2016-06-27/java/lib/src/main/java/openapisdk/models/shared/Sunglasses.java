package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sunglasses
 * Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
**/
public class Sunglasses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public Sunglasses withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Boolean value;
    public Sunglasses withValue(Boolean value) {
        this.value = value;
        return this;
    }
}