package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteFirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_rules")
    public DeleteFirewallRulesRequestBodyInboundRules[] inboundRules;
    public DeleteFirewallRulesRequestBody withInboundRules(DeleteFirewallRulesRequestBodyInboundRules[] inboundRules) {
        this.inboundRules = inboundRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_rules")
    public DeleteFirewallRulesRequestBodyOutboundRules[] outboundRules;
    public DeleteFirewallRulesRequestBody withOutboundRules(DeleteFirewallRulesRequestBodyOutboundRules[] outboundRules) {
        this.outboundRules = outboundRules;
        return this;
    }
}