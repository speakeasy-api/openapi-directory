package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public WebhookSubscription withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downstream_event_types")
    public String[] downstreamEventTypes;
    public WebhookSubscription withDownstreamEventTypes(String[] downstreamEventTypes) {
        this.downstreamEventTypes = downstreamEventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downstream_id")
    public String downstreamId;
    public WebhookSubscription withDownstreamId(String downstreamId) {
        this.downstreamId = downstreamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("execute_url")
    public String executeUrl;
    public WebhookSubscription withExecuteUrl(String executeUrl) {
        this.executeUrl = executeUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unify_event_types")
    public String[] unifyEventTypes;
    public WebhookSubscription withUnifyEventTypes(String[] unifyEventTypes) {
        this.unifyEventTypes = unifyEventTypes;
        return this;
    }
}