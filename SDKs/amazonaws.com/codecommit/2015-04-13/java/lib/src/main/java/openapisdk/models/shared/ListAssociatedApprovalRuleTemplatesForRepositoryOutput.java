package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateNames")
    public String[] approvalRuleTemplateNames;
    public ListAssociatedApprovalRuleTemplatesForRepositoryOutput withApprovalRuleTemplateNames(String[] approvalRuleTemplateNames) {
        this.approvalRuleTemplateNames = approvalRuleTemplateNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssociatedApprovalRuleTemplatesForRepositoryOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}