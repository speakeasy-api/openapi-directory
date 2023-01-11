package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateBudgetActionResponse {
    @JsonProperty("AccountId")
    public String accountId;
    public CreateBudgetActionResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ActionId")
    public String actionId;
    public CreateBudgetActionResponse withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public CreateBudgetActionResponse withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
}