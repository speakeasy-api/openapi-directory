package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProtectiveEquipmentBodyPart
 * Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>. 
**/
public class ProtectiveEquipmentBodyPart {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public ProtectiveEquipmentBodyPart withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EquipmentDetections")
    public EquipmentDetection[] equipmentDetections;
    public ProtectiveEquipmentBodyPart withEquipmentDetections(EquipmentDetection[] equipmentDetections) {
        this.equipmentDetections = equipmentDetections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public BodyPartEnum name;
    public ProtectiveEquipmentBodyPart withName(BodyPartEnum name) {
        this.name = name;
        return this;
    }
}