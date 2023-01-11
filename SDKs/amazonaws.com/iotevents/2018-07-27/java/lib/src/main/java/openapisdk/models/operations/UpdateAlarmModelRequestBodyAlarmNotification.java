package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAlarmModelRequestBodyAlarmNotification
 * Contains information about one or more notification actions.
**/
public class UpdateAlarmModelRequestBodyAlarmNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationActions")
    public openapisdk.models.shared.NotificationAction[] notificationActions;
    public UpdateAlarmModelRequestBodyAlarmNotification withNotificationActions(openapisdk.models.shared.NotificationAction[] notificationActions) {
        this.notificationActions = notificationActions;
        return this;
    }
}