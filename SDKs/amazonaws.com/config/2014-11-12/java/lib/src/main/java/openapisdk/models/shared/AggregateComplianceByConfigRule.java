package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateComplianceByConfigRule
 * <p>Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>
**/
public class AggregateComplianceByConfigRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public AggregateComplianceByConfigRule withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public AggregateComplianceByConfigRule withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Compliance")
    public Compliance compliance;
    public AggregateComplianceByConfigRule withCompliance(Compliance compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public AggregateComplianceByConfigRule withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
}