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
 * ApprovalRule
 * Returns information about an approval rule.
**/
public class ApprovalRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleContent")
    public String approvalRuleContent;
    public ApprovalRule withApprovalRuleContent(String approvalRuleContent) {
        this.approvalRuleContent = approvalRuleContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleId")
    public String approvalRuleId;
    public ApprovalRule withApprovalRuleId(String approvalRuleId) {
        this.approvalRuleId = approvalRuleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleName")
    public String approvalRuleName;
    public ApprovalRule withApprovalRuleName(String approvalRuleName) {
        this.approvalRuleName = approvalRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public ApprovalRule withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public ApprovalRule withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedUser")
    public String lastModifiedUser;
    public ApprovalRule withLastModifiedUser(String lastModifiedUser) {
        this.lastModifiedUser = lastModifiedUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originApprovalRuleTemplate")
    public OriginApprovalRuleTemplate originApprovalRuleTemplate;
    public ApprovalRule withOriginApprovalRuleTemplate(OriginApprovalRuleTemplate originApprovalRuleTemplate) {
        this.originApprovalRuleTemplate = originApprovalRuleTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleContentSha256")
    public String ruleContentSha256;
    public ApprovalRule withRuleContentSha256(String ruleContentSha256) {
        this.ruleContentSha256 = ruleContentSha256;
        return this;
    }
}