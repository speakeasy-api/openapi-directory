package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListDropletFirewalls200ApplicationJsonFirewalls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListDropletFirewalls200ApplicationJsonFirewalls withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public ListDropletFirewalls200ApplicationJsonFirewalls withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListDropletFirewalls200ApplicationJsonFirewalls withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_rules")
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRules[] inboundRules;
    public ListDropletFirewalls200ApplicationJsonFirewalls withInboundRules(ListDropletFirewalls200ApplicationJsonFirewallsInboundRules[] inboundRules) {
        this.inboundRules = inboundRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListDropletFirewalls200ApplicationJsonFirewalls withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_rules")
    public ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules[] outboundRules;
    public ListDropletFirewalls200ApplicationJsonFirewalls withOutboundRules(ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules[] outboundRules) {
        this.outboundRules = outboundRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending_changes")
    public ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges[] pendingChanges;
    public ListDropletFirewalls200ApplicationJsonFirewalls withPendingChanges(ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges[] pendingChanges) {
        this.pendingChanges = pendingChanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum status;
    public ListDropletFirewalls200ApplicationJsonFirewalls withStatus(ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, Object> tags;
    public ListDropletFirewalls200ApplicationJsonFirewalls withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}