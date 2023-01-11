package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateSubscriberRequest
 *  Request of CreateSubscriber 
**/
public class CreateSubscriberRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public CreateSubscriberRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public CreateSubscriberRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("Notification")
    public Notification notification;
    public CreateSubscriberRequest withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
    @JsonProperty("Subscriber")
    public Subscriber subscriber;
    public CreateSubscriberRequest withSubscriber(Subscriber subscriber) {
        this.subscriber = subscriber;
        return this;
    }
}