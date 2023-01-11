package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWebhookRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery_url")
    public String deliveryUrl;
    public UpdateWebhookRequest withDeliveryUrl(String deliveryUrl) {
        this.deliveryUrl = deliveryUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateWebhookRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public WebhookEventTypeEnum[] events;
    public UpdateWebhookRequest withEvents(WebhookEventTypeEnum[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StatusEnum status;
    public UpdateWebhookRequest withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}