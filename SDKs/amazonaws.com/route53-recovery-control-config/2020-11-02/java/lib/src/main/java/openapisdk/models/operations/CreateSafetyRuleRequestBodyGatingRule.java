package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSafetyRuleRequestBodyGatingRule
 * A new gating rule for a control panel.
**/
public class CreateSafetyRuleRequestBodyGatingRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlPanelArn")
    public String controlPanelArn;
    public CreateSafetyRuleRequestBodyGatingRule withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatingControls")
    public String[] gatingControls;
    public CreateSafetyRuleRequestBodyGatingRule withGatingControls(String[] gatingControls) {
        this.gatingControls = gatingControls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateSafetyRuleRequestBodyGatingRule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleConfig")
    public openapisdk.models.shared.RuleConfig ruleConfig;
    public CreateSafetyRuleRequestBodyGatingRule withRuleConfig(openapisdk.models.shared.RuleConfig ruleConfig) {
        this.ruleConfig = ruleConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetControls")
    public String[] targetControls;
    public CreateSafetyRuleRequestBodyGatingRule withTargetControls(String[] targetControls) {
        this.targetControls = targetControls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WaitPeriodMs")
    public Long waitPeriodMs;
    public CreateSafetyRuleRequestBodyGatingRule withWaitPeriodMs(Long waitPeriodMs) {
        this.waitPeriodMs = waitPeriodMs;
        return this;
    }
}