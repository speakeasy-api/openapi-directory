package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JourneySmsMessage
 * Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
**/
public class JourneySmsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityId")
    public String entityId;
    public JourneySmsMessage withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageType")
    public MessageTypeEnum messageType;
    public JourneySmsMessage withMessageType(MessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginationNumber")
    public String originationNumber;
    public JourneySmsMessage withOriginationNumber(String originationNumber) {
        this.originationNumber = originationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SenderId")
    public String senderId;
    public JourneySmsMessage withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateId")
    public String templateId;
    public JourneySmsMessage withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}