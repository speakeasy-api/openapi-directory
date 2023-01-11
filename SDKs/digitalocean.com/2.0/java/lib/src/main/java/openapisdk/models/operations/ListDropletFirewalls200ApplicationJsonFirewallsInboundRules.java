package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListDropletFirewalls200ApplicationJsonFirewallsInboundRules {
    @JsonProperty("ports")
    public String ports;
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum protocol;
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRules withProtocol(ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("sources")
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources sources;
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRules withSources(ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources sources) {
        this.sources = sources;
        return this;
    }
}