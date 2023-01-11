package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateBudgetWithResourceInput {
    @JsonProperty("BudgetName")
    public String budgetName;
    public AssociateBudgetWithResourceInput withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public AssociateBudgetWithResourceInput withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}