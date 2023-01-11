package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeBudgetActionResponse {
    @JsonProperty("AccountId")
    public String accountId;
    public DescribeBudgetActionResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("Action")
    public Action action;
    public DescribeBudgetActionResponse withAction(Action action) {
        this.action = action;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DescribeBudgetActionResponse withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
}