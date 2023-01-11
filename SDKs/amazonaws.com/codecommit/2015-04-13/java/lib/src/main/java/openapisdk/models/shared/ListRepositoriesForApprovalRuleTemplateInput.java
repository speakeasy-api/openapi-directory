package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRepositoriesForApprovalRuleTemplateInput {
    @JsonProperty("approvalRuleTemplateName")
    public String approvalRuleTemplateName;
    public ListRepositoriesForApprovalRuleTemplateInput withApprovalRuleTemplateName(String approvalRuleTemplateName) {
        this.approvalRuleTemplateName = approvalRuleTemplateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListRepositoriesForApprovalRuleTemplateInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRepositoriesForApprovalRuleTemplateInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}