package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateBudgetActionResponse {
    @JsonProperty("AccountId")
    public String accountId;
    public UpdateBudgetActionResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public UpdateBudgetActionResponse withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("NewAction")
    public Action newAction;
    public UpdateBudgetActionResponse withNewAction(Action newAction) {
        this.newAction = newAction;
        return this;
    }
    @JsonProperty("OldAction")
    public Action oldAction;
    public UpdateBudgetActionResponse withOldAction(Action oldAction) {
        this.oldAction = oldAction;
        return this;
    }
}