package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NotificationChannelConfig
 *  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
**/
public class NotificationChannelConfig {
    @JsonProperty("Sns")
    public SnsChannelConfig sns;
    public NotificationChannelConfig withSns(SnsChannelConfig sns) {
        this.sns = sns;
        return this;
    }
}