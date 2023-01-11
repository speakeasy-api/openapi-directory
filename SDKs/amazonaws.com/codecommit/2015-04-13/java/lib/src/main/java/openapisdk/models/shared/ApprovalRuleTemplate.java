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
 * ApprovalRuleTemplate
 * Returns information about an approval rule template.
**/
public class ApprovalRuleTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateContent")
    public String approvalRuleTemplateContent;
    public ApprovalRuleTemplate withApprovalRuleTemplateContent(String approvalRuleTemplateContent) {
        this.approvalRuleTemplateContent = approvalRuleTemplateContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateDescription")
    public String approvalRuleTemplateDescription;
    public ApprovalRuleTemplate withApprovalRuleTemplateDescription(String approvalRuleTemplateDescription) {
        this.approvalRuleTemplateDescription = approvalRuleTemplateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateId")
    public String approvalRuleTemplateId;
    public ApprovalRuleTemplate withApprovalRuleTemplateId(String approvalRuleTemplateId) {
        this.approvalRuleTemplateId = approvalRuleTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public ApprovalRuleTemplate withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public ApprovalRuleTemplate withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public ApprovalRuleTemplate withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedUser")
    public String lastModifiedUser;
    public ApprovalRuleTemplate withLastModifiedUser(String lastModifiedUser) {
        this.lastModifiedUser = lastModifiedUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleContentSha256")
    public String ruleContentSha256;
    public ApprovalRuleTemplate withRuleContentSha256(String ruleContentSha256) {
        this.ruleContentSha256 = ruleContentSha256;
        return this;
    }
}