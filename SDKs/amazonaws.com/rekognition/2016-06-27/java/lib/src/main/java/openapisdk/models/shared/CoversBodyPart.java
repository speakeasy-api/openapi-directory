package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CoversBodyPart
 * Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see <a>DetectProtectiveEquipment</a>.
**/
public class CoversBodyPart {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public CoversBodyPart withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Boolean value;
    public CoversBodyPart withValue(Boolean value) {
        this.value = value;
        return this;
    }
}