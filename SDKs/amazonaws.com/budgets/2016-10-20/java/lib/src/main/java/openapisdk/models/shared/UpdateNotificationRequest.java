package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNotificationRequest
 *  Request of UpdateNotification 
**/
public class UpdateNotificationRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public UpdateNotificationRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public UpdateNotificationRequest withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("NewNotification")
    public Notification newNotification;
    public UpdateNotificationRequest withNewNotification(Notification newNotification) {
        this.newNotification = newNotification;
        return this;
    }
    @JsonProperty("OldNotification")
    public Notification oldNotification;
    public UpdateNotificationRequest withOldNotification(Notification oldNotification) {
        this.oldNotification = oldNotification;
        return this;
    }
}