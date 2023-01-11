package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeSubscribersForNotificationRequest
 *  Request of DescribeSubscribersForNotification 
**/
public class DescribeSubscribersForNotificationRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DescribeSubscribersForNotificationRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DescribeSubscribersForNotificationRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeSubscribersForNotificationRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeSubscribersForNotificationRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("Notification")
    public Notification notification;
    public DescribeSubscribersForNotificationRequest withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
}