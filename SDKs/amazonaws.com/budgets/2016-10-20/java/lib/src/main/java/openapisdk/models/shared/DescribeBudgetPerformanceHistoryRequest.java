package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBudgetPerformanceHistoryRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DescribeBudgetPerformanceHistoryRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DescribeBudgetPerformanceHistoryRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeBudgetPerformanceHistoryRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeBudgetPerformanceHistoryRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimePeriod")
    public TimePeriod timePeriod;
    public DescribeBudgetPerformanceHistoryRequest withTimePeriod(TimePeriod timePeriod) {
        this.timePeriod = timePeriod;
        return this;
    }
}