package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigRule
 * <p>An Config rule represents an Lambda function that you create for a custom rule or a predefined function for an Config managed rule. The function evaluates configuration items to assess whether your Amazon Web Services resources comply with your desired configurations. This function can run when Config detects a configuration change to an Amazon Web Services resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Amazon Web Services resource Configurations with Config</a> in the <i>Config Developer Guide</i>.</p>
**/
public class ConfigRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleArn")
    public String configRuleArn;
    public ConfigRule withConfigRuleArn(String configRuleArn) {
        this.configRuleArn = configRuleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleId")
    public String configRuleId;
    public ConfigRule withConfigRuleId(String configRuleId) {
        this.configRuleId = configRuleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public ConfigRule withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleState")
    public ConfigRuleStateEnum configRuleState;
    public ConfigRule withConfigRuleState(ConfigRuleStateEnum configRuleState) {
        this.configRuleState = configRuleState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedBy")
    public String createdBy;
    public ConfigRule withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ConfigRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputParameters")
    public String inputParameters;
    public ConfigRule withInputParameters(String inputParameters) {
        this.inputParameters = inputParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumExecutionFrequency")
    public MaximumExecutionFrequencyEnum maximumExecutionFrequency;
    public ConfigRule withMaximumExecutionFrequency(MaximumExecutionFrequencyEnum maximumExecutionFrequency) {
        this.maximumExecutionFrequency = maximumExecutionFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Scope")
    public Scope scope;
    public ConfigRule withScope(Scope scope) {
        this.scope = scope;
        return this;
    }
    @JsonProperty("Source")
    public Source source;
    public ConfigRule withSource(Source source) {
        this.source = source;
        return this;
    }
}