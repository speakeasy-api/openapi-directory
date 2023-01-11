package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFirewallRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public UpdateFirewallRequestBodyInput withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_rules")
    public UpdateFirewallRequestBodyInboundRules[] inboundRules;
    public UpdateFirewallRequestBodyInput withInboundRules(UpdateFirewallRequestBodyInboundRules[] inboundRules) {
        this.inboundRules = inboundRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateFirewallRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_rules")
    public UpdateFirewallRequestBodyOutboundRules[] outboundRules;
    public UpdateFirewallRequestBodyInput withOutboundRules(UpdateFirewallRequestBodyOutboundRules[] outboundRules) {
        this.outboundRules = outboundRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, Object> tags;
    public UpdateFirewallRequestBodyInput withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}