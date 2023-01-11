package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteNotificationRequest
 *  Request of DeleteNotification 
**/
public class DeleteNotificationRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public DeleteNotificationRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public DeleteNotificationRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("Notification")
    public Notification notification;
    public DeleteNotificationRequest withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
}