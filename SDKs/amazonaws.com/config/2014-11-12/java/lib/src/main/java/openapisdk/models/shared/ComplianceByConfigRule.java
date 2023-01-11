package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComplianceByConfigRule
 * Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.
**/
public class ComplianceByConfigRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Compliance")
    public Compliance compliance;
    public ComplianceByConfigRule withCompliance(Compliance compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public ComplianceByConfigRule withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
}