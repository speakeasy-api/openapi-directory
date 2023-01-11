package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBudgetActionResponse {
    @JsonProperty("AccountId")
    public String accountId;
    public DeleteBudgetActionResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("Action")
    public Action action;
    public DeleteBudgetActionResponse withAction(Action action) {
        this.action = action;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DeleteBudgetActionResponse withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
}