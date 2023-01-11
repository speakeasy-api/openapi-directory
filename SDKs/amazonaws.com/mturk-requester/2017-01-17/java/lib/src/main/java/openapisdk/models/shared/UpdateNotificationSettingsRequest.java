package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNotificationSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean active;
    public UpdateNotificationSettingsRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("HITTypeId")
    public String hitTypeId;
    public UpdateNotificationSettingsRequest withHitTypeId(String hitTypeId) {
        this.hitTypeId = hitTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notification")
    public NotificationSpecification notification;
    public UpdateNotificationSettingsRequest withNotification(NotificationSpecification notification) {
        this.notification = notification;
        return this;
    }
}