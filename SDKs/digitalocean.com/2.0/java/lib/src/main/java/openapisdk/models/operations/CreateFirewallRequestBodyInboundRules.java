package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateFirewallRequestBodyInboundRules {
    @JsonProperty("ports")
    public String ports;
    public CreateFirewallRequestBodyInboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public CreateFirewallRequestBodyInboundRulesProtocolEnum protocol;
    public CreateFirewallRequestBodyInboundRules withProtocol(CreateFirewallRequestBodyInboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("sources")
    public CreateFirewallRequestBodyInboundRulesSources sources;
    public CreateFirewallRequestBodyInboundRules withSources(CreateFirewallRequestBodyInboundRulesSources sources) {
        this.sources = sources;
        return this;
    }
}