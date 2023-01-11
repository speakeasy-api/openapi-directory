package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BudgetDetail
 * Information about a budget.
**/
public class BudgetDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BudgetName")
    public String budgetName;
    public BudgetDetail withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
}