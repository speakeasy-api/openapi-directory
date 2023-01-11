package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeNotificationsForBudgetRequest
 *  Request of DescribeNotificationsForBudget 
**/
public class DescribeNotificationsForBudgetRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DescribeNotificationsForBudgetRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DescribeNotificationsForBudgetRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeNotificationsForBudgetRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeNotificationsForBudgetRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}