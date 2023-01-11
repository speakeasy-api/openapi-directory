package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFirewallRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public CreateFirewallRequestBodyInput withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_rules")
    public CreateFirewallRequestBodyInboundRules[] inboundRules;
    public CreateFirewallRequestBodyInput withInboundRules(CreateFirewallRequestBodyInboundRules[] inboundRules) {
        this.inboundRules = inboundRules;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateFirewallRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_rules")
    public CreateFirewallRequestBodyOutboundRules[] outboundRules;
    public CreateFirewallRequestBodyInput withOutboundRules(CreateFirewallRequestBodyOutboundRules[] outboundRules) {
        this.outboundRules = outboundRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, Object> tags;
    public CreateFirewallRequestBodyInput withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}