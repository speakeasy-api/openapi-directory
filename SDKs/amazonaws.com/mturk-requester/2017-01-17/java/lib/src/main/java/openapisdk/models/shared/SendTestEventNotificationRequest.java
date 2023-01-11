package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendTestEventNotificationRequest {
    @JsonProperty("Notification")
    public NotificationSpecification notification;
    public SendTestEventNotificationRequest withNotification(NotificationSpecification notification) {
        this.notification = notification;
        return this;
    }
    @JsonProperty("TestEventType")
    public EventTypeEnum testEventType;
    public SendTestEventNotificationRequest withTestEventType(EventTypeEnum testEventType) {
        this.testEventType = testEventType;
        return this;
    }
}