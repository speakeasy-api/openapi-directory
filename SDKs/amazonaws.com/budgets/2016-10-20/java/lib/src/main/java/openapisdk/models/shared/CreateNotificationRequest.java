package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateNotificationRequest
 *  Request of CreateNotification 
**/
public class CreateNotificationRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public CreateNotificationRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public CreateNotificationRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("Notification")
    public Notification notification;
    public CreateNotificationRequest withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
    @JsonProperty("Subscribers")
    public Subscriber[] subscribers;
    public CreateNotificationRequest withSubscribers(Subscriber[] subscribers) {
        this.subscribers = subscribers;
        return this;
    }
}