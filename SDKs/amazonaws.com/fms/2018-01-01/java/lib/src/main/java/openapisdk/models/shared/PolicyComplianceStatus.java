package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PolicyComplianceStatus
 * Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
**/
public class PolicyComplianceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationResults")
    public EvaluationResult[] evaluationResults;
    public PolicyComplianceStatus withEvaluationResults(EvaluationResult[] evaluationResults) {
        this.evaluationResults = evaluationResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IssueInfoMap")
    public java.util.Map<String, String> issueInfoMap;
    public PolicyComplianceStatus withIssueInfoMap(java.util.Map<String, String> issueInfoMap) {
        this.issueInfoMap = issueInfoMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdated")
    public OffsetDateTime lastUpdated;
    public PolicyComplianceStatus withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemberAccount")
    public String memberAccount;
    public PolicyComplianceStatus withMemberAccount(String memberAccount) {
        this.memberAccount = memberAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyId")
    public String policyId;
    public PolicyComplianceStatus withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyName")
    public String policyName;
    public PolicyComplianceStatus withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyOwner")
    public String policyOwner;
    public PolicyComplianceStatus withPolicyOwner(String policyOwner) {
        this.policyOwner = policyOwner;
        return this;
    }
}