package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartConfigRulesEvaluationRequest
 * <p/>
**/
public class StartConfigRulesEvaluationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleNames")
    public String[] configRuleNames;
    public StartConfigRulesEvaluationRequest withConfigRuleNames(String[] configRuleNames) {
        this.configRuleNames = configRuleNames;
        return this;
    }
}