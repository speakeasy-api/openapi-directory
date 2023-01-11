package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBudgetActionsForBudgetRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DescribeBudgetActionsForBudgetRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DescribeBudgetActionsForBudgetRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeBudgetActionsForBudgetRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeBudgetActionsForBudgetRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}