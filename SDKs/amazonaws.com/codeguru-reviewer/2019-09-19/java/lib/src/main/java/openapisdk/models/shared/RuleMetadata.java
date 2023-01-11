package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleMetadata
 * Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.
**/
public class RuleMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LongDescription")
    public String longDescription;
    public RuleMetadata withLongDescription(String longDescription) {
        this.longDescription = longDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleId")
    public String ruleId;
    public RuleMetadata withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleName")
    public String ruleName;
    public RuleMetadata withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleTags")
    public String[] ruleTags;
    public RuleMetadata withRuleTags(String[] ruleTags) {
        this.ruleTags = ruleTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShortDescription")
    public String shortDescription;
    public RuleMetadata withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
}