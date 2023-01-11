package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBudgetActionRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DeleteBudgetActionRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ActionId")
    public String actionId;
    public DeleteBudgetActionRequest withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DeleteBudgetActionRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
}