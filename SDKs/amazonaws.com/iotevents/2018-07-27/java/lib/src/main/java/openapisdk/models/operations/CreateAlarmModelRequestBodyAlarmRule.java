package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAlarmModelRequestBodyAlarmRule
 * Defines when your alarm is invoked.
**/
public class CreateAlarmModelRequestBodyAlarmRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simpleRule")
    public openapisdk.models.shared.SimpleRule simpleRule;
    public CreateAlarmModelRequestBodyAlarmRule withSimpleRule(openapisdk.models.shared.SimpleRule simpleRule) {
        this.simpleRule = simpleRule;
        return this;
    }
}