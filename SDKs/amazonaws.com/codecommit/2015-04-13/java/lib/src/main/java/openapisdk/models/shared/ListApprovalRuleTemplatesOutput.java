package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApprovalRuleTemplatesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRuleTemplateNames")
    public String[] approvalRuleTemplateNames;
    public ListApprovalRuleTemplatesOutput withApprovalRuleTemplateNames(String[] approvalRuleTemplateNames) {
        this.approvalRuleTemplateNames = approvalRuleTemplateNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListApprovalRuleTemplatesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}