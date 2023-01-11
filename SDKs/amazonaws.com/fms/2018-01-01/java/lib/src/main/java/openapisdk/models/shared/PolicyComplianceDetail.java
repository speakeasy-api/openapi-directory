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
 * PolicyComplianceDetail
 * Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
**/
public class PolicyComplianceDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationLimitExceeded")
    public Boolean evaluationLimitExceeded;
    public PolicyComplianceDetail withEvaluationLimitExceeded(Boolean evaluationLimitExceeded) {
        this.evaluationLimitExceeded = evaluationLimitExceeded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpiredAt")
    public OffsetDateTime expiredAt;
    public PolicyComplianceDetail withExpiredAt(OffsetDateTime expiredAt) {
        this.expiredAt = expiredAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IssueInfoMap")
    public java.util.Map<String, String> issueInfoMap;
    public PolicyComplianceDetail withIssueInfoMap(java.util.Map<String, String> issueInfoMap) {
        this.issueInfoMap = issueInfoMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemberAccount")
    public String memberAccount;
    public PolicyComplianceDetail withMemberAccount(String memberAccount) {
        this.memberAccount = memberAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyId")
    public String policyId;
    public PolicyComplianceDetail withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyOwner")
    public String policyOwner;
    public PolicyComplianceDetail withPolicyOwner(String policyOwner) {
        this.policyOwner = policyOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Violators")
    public ComplianceViolator[] violators;
    public PolicyComplianceDetail withViolators(ComplianceViolator[] violators) {
        this.violators = violators;
        return this;
    }
}