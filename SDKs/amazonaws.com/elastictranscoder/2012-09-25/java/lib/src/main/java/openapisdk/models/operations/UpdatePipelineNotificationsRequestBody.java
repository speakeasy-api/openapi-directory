package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePipelineNotificationsRequestBody {
    @JsonProperty("Notifications")
    public UpdatePipelineNotificationsRequestBodyNotifications notifications;
    public UpdatePipelineNotificationsRequestBody withNotifications(UpdatePipelineNotificationsRequestBodyNotifications notifications) {
        this.notifications = notifications;
        return this;
    }
}