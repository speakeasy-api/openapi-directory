package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAlarmModelRequestBodyAlarmRule
 * Defines when your alarm is invoked.
**/
public class UpdateAlarmModelRequestBodyAlarmRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simpleRule")
    public openapisdk.models.shared.SimpleRule simpleRule;
    public UpdateAlarmModelRequestBodyAlarmRule withSimpleRule(openapisdk.models.shared.SimpleRule simpleRule) {
        this.simpleRule = simpleRule;
        return this;
    }
}