package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BotFilter
 * Filters the responses returned by the <code>ListBots</code> operation.
**/
public class BotFilter {
    @JsonProperty("name")
    public BotFilterNameEnum name;
    public BotFilter withName(BotFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operator")
    public BotFilterOperatorEnum operator;
    public BotFilter withOperator(BotFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public BotFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}