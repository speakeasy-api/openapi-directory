package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeNotificationsForBudgetResponse
 *  Response of GetNotificationsForBudget 
**/
public class DescribeNotificationsForBudgetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeNotificationsForBudgetResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notifications")
    public Notification[] notifications;
    public DescribeNotificationsForBudgetResponse withNotifications(Notification[] notifications) {
        this.notifications = notifications;
        return this;
    }
}