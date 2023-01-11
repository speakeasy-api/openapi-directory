package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GatingRule
 * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
**/
public class GatingRule {
    @JsonProperty("ControlPanelArn")
    public String controlPanelArn;
    public GatingRule withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
    @JsonProperty("GatingControls")
    public String[] gatingControls;
    public GatingRule withGatingControls(String[] gatingControls) {
        this.gatingControls = gatingControls;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public GatingRule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RuleConfig")
    public RuleConfig ruleConfig;
    public GatingRule withRuleConfig(RuleConfig ruleConfig) {
        this.ruleConfig = ruleConfig;
        return this;
    }
    @JsonProperty("SafetyRuleArn")
    public String safetyRuleArn;
    public GatingRule withSafetyRuleArn(String safetyRuleArn) {
        this.safetyRuleArn = safetyRuleArn;
        return this;
    }
    @JsonProperty("Status")
    public StatusEnum status;
    public GatingRule withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("TargetControls")
    public String[] targetControls;
    public GatingRule withTargetControls(String[] targetControls) {
        this.targetControls = targetControls;
        return this;
    }
    @JsonProperty("WaitPeriodMs")
    public Long waitPeriodMs;
    public GatingRule withWaitPeriodMs(Long waitPeriodMs) {
        this.waitPeriodMs = waitPeriodMs;
        return this;
    }
}