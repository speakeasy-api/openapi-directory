package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRepositoriesForApprovalRuleTemplateOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRepositoriesForApprovalRuleTemplateOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryNames")
    public String[] repositoryNames;
    public ListRepositoriesForApprovalRuleTemplateOutput withRepositoryNames(String[] repositoryNames) {
        this.repositoryNames = repositoryNames;
        return this;
    }
}