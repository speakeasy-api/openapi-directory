package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlarmNotification
 * Contains information about one or more notification actions.
**/
public class AlarmNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationActions")
    public NotificationAction[] notificationActions;
    public AlarmNotification withNotificationActions(NotificationAction[] notificationActions) {
        this.notificationActions = notificationActions;
        return this;
    }
}