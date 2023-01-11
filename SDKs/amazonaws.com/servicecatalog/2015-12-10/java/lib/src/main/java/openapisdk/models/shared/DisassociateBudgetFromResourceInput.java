package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateBudgetFromResourceInput {
    @JsonProperty("BudgetName")
    public String budgetName;
    public DisassociateBudgetFromResourceInput withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public DisassociateBudgetFromResourceInput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}