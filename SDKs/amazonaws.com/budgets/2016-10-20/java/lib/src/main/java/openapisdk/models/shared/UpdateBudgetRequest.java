package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateBudgetRequest
 *  Request of UpdateBudget 
**/
public class UpdateBudgetRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public UpdateBudgetRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("NewBudget")
    public Budget newBudget;
    public UpdateBudgetRequest withNewBudget(Budget newBudget) {
        this.newBudget = newBudget;
        return this;
    }
}