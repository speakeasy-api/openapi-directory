package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBudgetActionHistoriesRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DescribeBudgetActionHistoriesRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ActionId")
    public String actionId;
    public DescribeBudgetActionHistoriesRequest withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DescribeBudgetActionHistoriesRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeBudgetActionHistoriesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeBudgetActionHistoriesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimePeriod")
    public TimePeriod timePeriod;
    public DescribeBudgetActionHistoriesRequest withTimePeriod(TimePeriod timePeriod) {
        this.timePeriod = timePeriod;
        return this;
    }
}