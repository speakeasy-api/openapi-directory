package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeBudgetsResponse
 *  Response of DescribeBudgets 
**/
public class DescribeBudgetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Budgets")
    public Budget[] budgets;
    public DescribeBudgetsResponse withBudgets(Budget[] budgets) {
        this.budgets = budgets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeBudgetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}