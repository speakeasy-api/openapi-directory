package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBudgetPerformanceHistoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BudgetPerformanceHistory")
    public BudgetPerformanceHistory budgetPerformanceHistory;
    public DescribeBudgetPerformanceHistoryResponse withBudgetPerformanceHistory(BudgetPerformanceHistory budgetPerformanceHistory) {
        this.budgetPerformanceHistory = budgetPerformanceHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeBudgetPerformanceHistoryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}