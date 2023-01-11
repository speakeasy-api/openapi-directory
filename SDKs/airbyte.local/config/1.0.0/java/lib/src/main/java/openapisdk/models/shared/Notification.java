package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Notification {
    @JsonProperty("notificationType")
    public NotificationTypeEnum notificationType;
    public Notification withNotificationType(NotificationTypeEnum notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slackConfiguration")
    public SlackNotificationConfiguration slackConfiguration;
    public Notification withSlackConfiguration(SlackNotificationConfiguration slackConfiguration) {
        this.slackConfiguration = slackConfiguration;
        return this;
    }
}