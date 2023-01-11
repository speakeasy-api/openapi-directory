package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BotLocaleFilter
 * Filters responses returned by the <code>ListBotLocales</code> operation.
**/
public class BotLocaleFilter {
    @JsonProperty("name")
    public BotLocaleFilterNameEnum name;
    public BotLocaleFilter withName(BotLocaleFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operator")
    public BotLocaleFilterOperatorEnum operator;
    public BotLocaleFilter withOperator(BotLocaleFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public BotLocaleFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}