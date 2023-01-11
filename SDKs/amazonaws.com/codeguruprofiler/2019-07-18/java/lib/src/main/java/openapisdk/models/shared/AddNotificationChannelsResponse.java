package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddNotificationChannelsResponse
 * The structure representing the AddNotificationChannelsResponse.
**/
public class AddNotificationChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationConfiguration")
    public NotificationConfiguration notificationConfiguration;
    public AddNotificationChannelsResponse withNotificationConfiguration(NotificationConfiguration notificationConfiguration) {
        this.notificationConfiguration = notificationConfiguration;
        return this;
    }
}