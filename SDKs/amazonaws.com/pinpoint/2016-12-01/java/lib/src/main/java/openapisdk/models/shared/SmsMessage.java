package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SmsMessage
 * Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.
**/
public class SmsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public SmsMessage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityId")
    public String entityId;
    public SmsMessage withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keyword")
    public String keyword;
    public SmsMessage withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaUrl")
    public String mediaUrl;
    public SmsMessage withMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageType")
    public MessageTypeEnum messageType;
    public SmsMessage withMessageType(MessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginationNumber")
    public String originationNumber;
    public SmsMessage withOriginationNumber(String originationNumber) {
        this.originationNumber = originationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SenderId")
    public String senderId;
    public SmsMessage withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Substitutions")
    public java.util.Map<String, String[]> substitutions;
    public SmsMessage withSubstitutions(java.util.Map<String, String[]> substitutions) {
        this.substitutions = substitutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateId")
    public String templateId;
    public SmsMessage withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}