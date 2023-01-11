package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AssertionRule
 * An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
**/
public class AssertionRule {
    @JsonProperty("AssertedControls")
    public String[] assertedControls;
    public AssertionRule withAssertedControls(String[] assertedControls) {
        this.assertedControls = assertedControls;
        return this;
    }
    @JsonProperty("ControlPanelArn")
    public String controlPanelArn;
    public AssertionRule withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public AssertionRule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RuleConfig")
    public RuleConfig ruleConfig;
    public AssertionRule withRuleConfig(RuleConfig ruleConfig) {
        this.ruleConfig = ruleConfig;
        return this;
    }
    @JsonProperty("SafetyRuleArn")
    public String safetyRuleArn;
    public AssertionRule withSafetyRuleArn(String safetyRuleArn) {
        this.safetyRuleArn = safetyRuleArn;
        return this;
    }
    @JsonProperty("Status")
    public StatusEnum status;
    public AssertionRule withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("WaitPeriodMs")
    public Long waitPeriodMs;
    public AssertionRule withWaitPeriodMs(Long waitPeriodMs) {
        this.waitPeriodMs = waitPeriodMs;
        return this;
    }
}