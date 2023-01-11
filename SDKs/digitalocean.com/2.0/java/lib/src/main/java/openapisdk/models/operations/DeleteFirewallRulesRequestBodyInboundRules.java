package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFirewallRulesRequestBodyInboundRules {
    @JsonProperty("ports")
    public String ports;
    public DeleteFirewallRulesRequestBodyInboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum protocol;
    public DeleteFirewallRulesRequestBodyInboundRules withProtocol(DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("sources")
    public DeleteFirewallRulesRequestBodyInboundRulesSources sources;
    public DeleteFirewallRulesRequestBodyInboundRules withSources(DeleteFirewallRulesRequestBodyInboundRulesSources sources) {
        this.sources = sources;
        return this;
    }
}