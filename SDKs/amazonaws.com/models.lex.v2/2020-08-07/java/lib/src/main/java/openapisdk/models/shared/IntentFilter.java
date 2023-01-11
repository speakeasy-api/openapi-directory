package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IntentFilter
 * Filters the response from the <code>ListIntents</code> operation.
**/
public class IntentFilter {
    @JsonProperty("name")
    public IntentFilterNameEnum name;
    public IntentFilter withName(IntentFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operator")
    public IntentFilterOperatorEnum operator;
    public IntentFilter withOperator(IntentFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public IntentFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}