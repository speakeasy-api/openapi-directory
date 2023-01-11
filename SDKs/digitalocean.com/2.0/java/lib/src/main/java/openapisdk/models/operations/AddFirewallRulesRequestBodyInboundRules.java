package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddFirewallRulesRequestBodyInboundRules {
    @JsonProperty("ports")
    public String ports;
    public AddFirewallRulesRequestBodyInboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public AddFirewallRulesRequestBodyInboundRulesProtocolEnum protocol;
    public AddFirewallRulesRequestBodyInboundRules withProtocol(AddFirewallRulesRequestBodyInboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("sources")
    public AddFirewallRulesRequestBodyInboundRulesSources sources;
    public AddFirewallRulesRequestBodyInboundRules withSources(AddFirewallRulesRequestBodyInboundRulesSources sources) {
        this.sources = sources;
        return this;
    }
}