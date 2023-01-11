package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IotTopicPublishAction
 * Information required to publish the MQTT message through the AWS IoT message broker.
**/
public class IotTopicPublishAction {
    @JsonProperty("mqttTopic")
    public String mqttTopic;
    public IotTopicPublishAction withMqttTopic(String mqttTopic) {
        this.mqttTopic = mqttTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public Payload payload;
    public IotTopicPublishAction withPayload(Payload payload) {
        this.payload = payload;
        return this;
    }
}