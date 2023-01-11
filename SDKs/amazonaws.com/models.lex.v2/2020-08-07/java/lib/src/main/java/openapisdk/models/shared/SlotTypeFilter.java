package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SlotTypeFilter
 * Filters the response from the <code>ListSlotTypes</code> operation.
**/
public class SlotTypeFilter {
    @JsonProperty("name")
    public SlotTypeFilterNameEnum name;
    public SlotTypeFilter withName(SlotTypeFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operator")
    public SlotTypeFilterOperatorEnum operator;
    public SlotTypeFilter withOperator(SlotTypeFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public SlotTypeFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}