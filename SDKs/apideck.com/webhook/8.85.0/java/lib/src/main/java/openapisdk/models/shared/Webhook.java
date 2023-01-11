package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Webhook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Webhook withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("delivery_url")
    public String deliveryUrl;
    public Webhook withDeliveryUrl(String deliveryUrl) {
        this.deliveryUrl = deliveryUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Webhook withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("events")
    public WebhookEventTypeEnum[] events;
    public Webhook withEvents(WebhookEventTypeEnum[] events) {
        this.events = events;
        return this;
    }
    @JsonProperty("execute_base_url")
    public String executeBaseUrl;
    public Webhook withExecuteBaseUrl(String executeBaseUrl) {
        this.executeBaseUrl = executeBaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Webhook withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("status")
    public StatusEnum status;
    public Webhook withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("unified_api")
    public UnifiedApiIdEnum unifiedApi;
    public Webhook withUnifiedApi(UnifiedApiIdEnum unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Webhook withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}