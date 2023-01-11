package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNotificationConfigurationResponse
 * The structure representing the GetNotificationConfigurationResponse.
**/
public class GetNotificationConfigurationResponse {
    @JsonProperty("notificationConfiguration")
    public NotificationConfiguration notificationConfiguration;
    public GetNotificationConfigurationResponse withNotificationConfiguration(NotificationConfiguration notificationConfiguration) {
        this.notificationConfiguration = notificationConfiguration;
        return this;
    }
}