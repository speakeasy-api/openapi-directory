package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateFirewallRequestBodyInboundRules {
    @JsonProperty("ports")
    public String ports;
    public UpdateFirewallRequestBodyInboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateFirewallRequestBodyInboundRulesProtocolEnum protocol;
    public UpdateFirewallRequestBodyInboundRules withProtocol(UpdateFirewallRequestBodyInboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("sources")
    public UpdateFirewallRequestBodyInboundRulesSources sources;
    public UpdateFirewallRequestBodyInboundRules withSources(UpdateFirewallRequestBodyInboundRulesSources sources) {
        this.sources = sources;
        return this;
    }
}