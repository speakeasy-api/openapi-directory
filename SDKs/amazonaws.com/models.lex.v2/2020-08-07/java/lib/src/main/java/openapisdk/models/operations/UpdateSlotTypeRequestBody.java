package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSlotTypeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateSlotTypeRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentSlotTypeSignature")
    public String parentSlotTypeSignature;
    public UpdateSlotTypeRequestBody withParentSlotTypeSignature(String parentSlotTypeSignature) {
        this.parentSlotTypeSignature = parentSlotTypeSignature;
        return this;
    }
    @JsonProperty("slotTypeName")
    public String slotTypeName;
    public UpdateSlotTypeRequestBody withSlotTypeName(String slotTypeName) {
        this.slotTypeName = slotTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypeValues")
    public openapisdk.models.shared.SlotTypeValue[] slotTypeValues;
    public UpdateSlotTypeRequestBody withSlotTypeValues(openapisdk.models.shared.SlotTypeValue[] slotTypeValues) {
        this.slotTypeValues = slotTypeValues;
        return this;
    }
    @JsonProperty("valueSelectionSetting")
    public UpdateSlotTypeRequestBodyValueSelectionSetting valueSelectionSetting;
    public UpdateSlotTypeRequestBody withValueSelectionSetting(UpdateSlotTypeRequestBodyValueSelectionSetting valueSelectionSetting) {
        this.valueSelectionSetting = valueSelectionSetting;
        return this;
    }
}