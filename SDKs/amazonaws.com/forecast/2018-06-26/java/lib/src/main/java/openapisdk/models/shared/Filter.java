package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Filter
 * Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value.
**/
public class Filter {
    @JsonProperty("Condition")
    public FilterConditionStringEnum condition;
    public Filter withCondition(FilterConditionStringEnum condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("Key")
    public String key;
    public Filter withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public Filter withValue(String value) {
        this.value = value;
        return this;
    }
}