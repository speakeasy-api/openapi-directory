package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SlotFilter
 * Filters the response from the <code>ListSlots</code> operation.
**/
public class SlotFilter {
    @JsonProperty("name")
    public SlotFilterNameEnum name;
    public SlotFilter withName(SlotFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operator")
    public SlotFilterOperatorEnum operator;
    public SlotFilter withOperator(SlotFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public SlotFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}