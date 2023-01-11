package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWebhookRequest {
    @JsonProperty("delivery_url")
    public String deliveryUrl;
    public CreateWebhookRequest withDeliveryUrl(String deliveryUrl) {
        this.deliveryUrl = deliveryUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateWebhookRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("events")
    public WebhookEventTypeEnum[] events;
    public CreateWebhookRequest withEvents(WebhookEventTypeEnum[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("status")
    public StatusEnum status;
    public CreateWebhookRequest withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("unified_api")
    public UnifiedApiIdEnum unifiedApi;
    public CreateWebhookRequest withUnifiedApi(UnifiedApiIdEnum unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
}