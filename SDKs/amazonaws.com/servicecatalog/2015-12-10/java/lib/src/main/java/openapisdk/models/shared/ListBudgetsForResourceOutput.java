package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBudgetsForResourceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Budgets")
    public BudgetDetail[] budgets;
    public ListBudgetsForResourceOutput withBudgets(BudgetDetail[] budgets) {
        this.budgets = budgets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListBudgetsForResourceOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}