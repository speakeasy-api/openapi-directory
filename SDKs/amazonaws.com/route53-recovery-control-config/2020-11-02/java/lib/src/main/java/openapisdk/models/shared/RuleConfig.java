package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RuleConfig
 * The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.
**/
public class RuleConfig {
    @JsonProperty("Inverted")
    public Boolean inverted;
    public RuleConfig withInverted(Boolean inverted) {
        this.inverted = inverted;
        return this;
    }
    @JsonProperty("Threshold")
    public Long threshold;
    public RuleConfig withThreshold(Long threshold) {
        this.threshold = threshold;
        return this;
    }
    @JsonProperty("Type")
    public RuleTypeEnum type;
    public RuleConfig withType(RuleTypeEnum type) {
        this.type = type;
        return this;
    }
}