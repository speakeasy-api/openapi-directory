package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Filter
 * Filter the selection by using a condition.
**/
public class Filter {
    @JsonProperty("condition")
    public Condition condition;
    public Filter withCondition(Condition condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public Filter withKey(String key) {
        this.key = key;
        return this;
    }
}