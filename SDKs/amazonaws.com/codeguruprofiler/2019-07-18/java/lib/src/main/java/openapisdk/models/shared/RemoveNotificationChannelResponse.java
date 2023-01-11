package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveNotificationChannelResponse
 * The structure representing the RemoveNotificationChannelResponse.
**/
public class RemoveNotificationChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationConfiguration")
    public NotificationConfiguration notificationConfiguration;
    public RemoveNotificationChannelResponse withNotificationConfiguration(NotificationConfiguration notificationConfiguration) {
        this.notificationConfiguration = notificationConfiguration;
        return this;
    }
}