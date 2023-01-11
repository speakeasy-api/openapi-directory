package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlarmState
 * Contains information about the current state of the alarm.
**/
public class AlarmState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerAction")
    public CustomerAction customerAction;
    public AlarmState withCustomerAction(CustomerAction customerAction) {
        this.customerAction = customerAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleEvaluation")
    public RuleEvaluation ruleEvaluation;
    public AlarmState withRuleEvaluation(RuleEvaluation ruleEvaluation) {
        this.ruleEvaluation = ruleEvaluation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateName")
    public AlarmStateNameEnum stateName;
    public AlarmState withStateName(AlarmStateNameEnum stateName) {
        this.stateName = stateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemEvent")
    public SystemEvent systemEvent;
    public AlarmState withSystemEvent(SystemEvent systemEvent) {
        this.systemEvent = systemEvent;
        return this;
    }
}