package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class WebhookActivityAttributesV2WebhookV2Details {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public WebhookActivityAttributesV2WebhookV2Details withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptId")
    public String attemptId;
    public WebhookActivityAttributesV2WebhookV2Details withAttemptId(String attemptId) {
        this.attemptId = attemptId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public String event;
    public WebhookActivityAttributesV2WebhookV2Details withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventData")
    public WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData eventData;
    public WebhookActivityAttributesV2WebhookV2Details withEventData(WebhookActivityAttributesV2WebhookV2DetailsWebhookV2EventData eventData) {
        this.eventData = eventData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventTimestamp")
    public OffsetDateTime eventTimestamp;
    public WebhookActivityAttributesV2WebhookV2Details withEventTimestamp(OffsetDateTime eventTimestamp) {
        this.eventTimestamp = eventTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public WebhookActivityAttributesV2WebhookV2Details withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;
    public WebhookActivityAttributesV2WebhookV2Details withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public WebhookActivityAttributesV2WebhookV2Details withUsername(String username) {
        this.username = username;
        return this;
    }
}