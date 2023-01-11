package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExecuteBudgetActionResponse {
    @JsonProperty("AccountId")
    public String accountId;
    public ExecuteBudgetActionResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ActionId")
    public String actionId;
    public ExecuteBudgetActionResponse withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public ExecuteBudgetActionResponse withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("ExecutionType")
    public ExecutionTypeEnum executionType;
    public ExecuteBudgetActionResponse withExecutionType(ExecutionTypeEnum executionType) {
        this.executionType = executionType;
        return this;
    }
}