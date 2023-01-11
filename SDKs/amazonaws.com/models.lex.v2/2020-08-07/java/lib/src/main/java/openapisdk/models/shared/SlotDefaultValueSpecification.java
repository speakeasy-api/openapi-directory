package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SlotDefaultValueSpecification
 * Defines a list of values that Amazon Lex should use as the default value for a slot.
**/
public class SlotDefaultValueSpecification {
    @JsonProperty("defaultValueList")
    public SlotDefaultValue[] defaultValueList;
    public SlotDefaultValueSpecification withDefaultValueList(SlotDefaultValue[] defaultValueList) {
        this.defaultValueList = defaultValueList;
        return this;
    }
}