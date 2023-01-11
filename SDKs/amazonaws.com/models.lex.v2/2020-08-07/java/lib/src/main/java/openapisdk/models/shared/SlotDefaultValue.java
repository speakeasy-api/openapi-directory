package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SlotDefaultValue
 * Specifies the default value to use when a user doesn't provide a value for a slot.
**/
public class SlotDefaultValue {
    @JsonProperty("defaultValue")
    public String defaultValue;
    public SlotDefaultValue withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
}