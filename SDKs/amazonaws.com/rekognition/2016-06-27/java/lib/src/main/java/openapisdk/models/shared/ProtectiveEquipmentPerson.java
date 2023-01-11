package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProtectiveEquipmentPerson
 * A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.
**/
public class ProtectiveEquipmentPerson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BodyParts")
    public ProtectiveEquipmentBodyPart[] bodyParts;
    public ProtectiveEquipmentPerson withBodyParts(ProtectiveEquipmentBodyPart[] bodyParts) {
        this.bodyParts = bodyParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BoundingBox")
    public BoundingBox boundingBox;
    public ProtectiveEquipmentPerson withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public ProtectiveEquipmentPerson withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public Long id;
    public ProtectiveEquipmentPerson withId(Long id) {
        this.id = id;
        return this;
    }
}