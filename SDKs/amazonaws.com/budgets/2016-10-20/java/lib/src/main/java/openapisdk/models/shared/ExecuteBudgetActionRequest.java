package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExecuteBudgetActionRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public ExecuteBudgetActionRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ActionId")
    public String actionId;
    public ExecuteBudgetActionRequest withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public ExecuteBudgetActionRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("ExecutionType")
    public ExecutionTypeEnum executionType;
    public ExecuteBudgetActionRequest withExecutionType(ExecutionTypeEnum executionType) {
        this.executionType = executionType;
        return this;
    }
}