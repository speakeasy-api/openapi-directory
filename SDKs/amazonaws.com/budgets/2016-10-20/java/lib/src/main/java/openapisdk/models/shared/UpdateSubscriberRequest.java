package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateSubscriberRequest
 *  Request of UpdateSubscriber 
**/
public class UpdateSubscriberRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public UpdateSubscriberRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public UpdateSubscriberRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("NewSubscriber")
    public Subscriber newSubscriber;
    public UpdateSubscriberRequest withNewSubscriber(Subscriber newSubscriber) {
        this.newSubscriber = newSubscriber;
        return this;
    }
    @JsonProperty("Notification")
    public Notification notification;
    public UpdateSubscriberRequest withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
    @JsonProperty("OldSubscriber")
    public Subscriber oldSubscriber;
    public UpdateSubscriberRequest withOldSubscriber(Subscriber oldSubscriber) {
        this.oldSubscriber = oldSubscriber;
        return this;
    }
}