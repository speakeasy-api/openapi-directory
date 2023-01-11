package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuiltInSlotTypeSummary
 * Provides summary information about a built-in slot type for the <a>ListBuiltInSlotTypes</a> operation.
**/
public class BuiltInSlotTypeSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BuiltInSlotTypeSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotTypeSignature")
    public String slotTypeSignature;
    public BuiltInSlotTypeSummary withSlotTypeSignature(String slotTypeSignature) {
        this.slotTypeSignature = slotTypeSignature;
        return this;
    }
}