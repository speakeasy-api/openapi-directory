package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MessageInput {
    @JsonProperty("body")
    public String body;
    public MessageInput withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public MessageInput withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messaging_service_id")
    public String messagingServiceId;
    public MessageInput withMessagingServiceId(String messagingServiceId) {
        this.messagingServiceId = messagingServiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public String reference;
    public MessageInput withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduled_at")
    public OffsetDateTime scheduledAt;
    public MessageInput withScheduledAt(OffsetDateTime scheduledAt) {
        this.scheduledAt = scheduledAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public MessageInput withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public MessageInput withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MessageMessageTypeEnum type;
    public MessageInput withType(MessageMessageTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_url")
    public String webhookUrl;
    public MessageInput withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}