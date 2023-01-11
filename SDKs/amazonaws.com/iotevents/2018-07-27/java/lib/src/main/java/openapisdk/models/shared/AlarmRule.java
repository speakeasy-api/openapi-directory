package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlarmRule
 * Defines when your alarm is invoked.
**/
public class AlarmRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simpleRule")
    public SimpleRule simpleRule;
    public AlarmRule withSimpleRule(SimpleRule simpleRule) {
        this.simpleRule = simpleRule;
        return this;
    }
}