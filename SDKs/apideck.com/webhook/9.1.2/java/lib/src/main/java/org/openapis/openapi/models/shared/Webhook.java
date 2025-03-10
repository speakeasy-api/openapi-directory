/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class Webhook {
    /**
     * The date and time when the object was created.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Webhook withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * The delivery url of the webhook endpoint.
     */
    @JsonProperty("delivery_url")
    public String deliveryUrl;
    public Webhook withDeliveryUrl(String deliveryUrl) {
        this.deliveryUrl = deliveryUrl;
        return this;
    }
    
    /**
     * A description of the object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Webhook withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled_reason")
    public WebhookDisabledReasonEnum disabledReason;
    public Webhook withDisabledReason(WebhookDisabledReasonEnum disabledReason) {
        this.disabledReason = disabledReason;
        return this;
    }
    
    /**
     * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
     */
    @JsonProperty("events")
    public WebhookEventTypeEnum[] events;
    public Webhook withEvents(WebhookEventTypeEnum[] events) {
        this.events = events;
        return this;
    }
    
    /**
     * The Unify Base URL events from connectors will be sent to after service id is appended.
     */
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
    
    /**
     * The status of the webhook.
     */
    @JsonProperty("status")
    public StatusEnum status;
    public Webhook withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * Name of Apideck Unified API
     */
    @JsonProperty("unified_api")
    public UnifiedApiIdEnum unifiedApi;
    public Webhook withUnifiedApi(UnifiedApiIdEnum unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
    
    /**
     * The date and time when the object was last updated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Webhook withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
}
