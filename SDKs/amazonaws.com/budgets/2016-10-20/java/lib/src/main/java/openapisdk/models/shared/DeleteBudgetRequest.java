package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteBudgetRequest
 *  Request of DeleteBudget 
**/
public class DeleteBudgetRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DeleteBudgetRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DeleteBudgetRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
}