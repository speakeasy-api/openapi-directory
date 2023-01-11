package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Emotion
 * The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.
**/
public class Emotion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public Emotion withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public EmotionNameEnum type;
    public Emotion withType(EmotionNameEnum type) {
        this.type = type;
        return this;
    }
}