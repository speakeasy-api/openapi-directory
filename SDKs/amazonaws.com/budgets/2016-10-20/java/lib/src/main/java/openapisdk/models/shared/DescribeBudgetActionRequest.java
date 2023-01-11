package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeBudgetActionRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DescribeBudgetActionRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ActionId")
    public String actionId;
    public DescribeBudgetActionRequest withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DescribeBudgetActionRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
}