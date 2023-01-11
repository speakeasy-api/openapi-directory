package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PropertyNotification
 * Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.
**/
public class PropertyNotification {
    @JsonProperty("state")
    public PropertyNotificationStateEnum state;
    public PropertyNotification withState(PropertyNotificationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("topic")
    public String topic;
    public PropertyNotification withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}