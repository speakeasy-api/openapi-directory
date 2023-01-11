package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatelessRulesAndCustomActions
 * Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules. 
**/
public class StatelessRulesAndCustomActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomActions")
    public CustomAction[] customActions;
    public StatelessRulesAndCustomActions withCustomActions(CustomAction[] customActions) {
        this.customActions = customActions;
        return this;
    }
    @JsonProperty("StatelessRules")
    public StatelessRule[] statelessRules;
    public StatelessRulesAndCustomActions withStatelessRules(StatelessRule[] statelessRules) {
        this.statelessRules = statelessRules;
        return this;
    }
}