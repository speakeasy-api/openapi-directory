package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryFilter
 * An inventory filter.
**/
public class InventoryFilter {
    @JsonProperty("Condition")
    public InventoryFilterConditionEnum condition;
    public InventoryFilter withCondition(InventoryFilterConditionEnum condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public InventoryFilter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public InventoryFilter withValue(String value) {
        this.value = value;
        return this;
    }
}