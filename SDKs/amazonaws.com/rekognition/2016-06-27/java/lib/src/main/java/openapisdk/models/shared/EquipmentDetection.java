package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EquipmentDetection
 * Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.
**/
public class EquipmentDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BoundingBox")
    public BoundingBox boundingBox;
    public EquipmentDetection withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public EquipmentDetection withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CoversBodyPart")
    public CoversBodyPart coversBodyPart;
    public EquipmentDetection withCoversBodyPart(CoversBodyPart coversBodyPart) {
        this.coversBodyPart = coversBodyPart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ProtectiveEquipmentTypeEnum type;
    public EquipmentDetection withType(ProtectiveEquipmentTypeEnum type) {
        this.type = type;
        return this;
    }
}