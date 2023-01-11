package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Eyeglasses
 * Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
**/
public class Eyeglasses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public Eyeglasses withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Boolean value;
    public Eyeglasses withValue(Boolean value) {
        this.value = value;
        return this;
    }
}