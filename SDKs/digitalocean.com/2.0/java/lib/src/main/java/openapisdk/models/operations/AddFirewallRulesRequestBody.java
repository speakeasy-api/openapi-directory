package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddFirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_rules")
    public AddFirewallRulesRequestBodyInboundRules[] inboundRules;
    public AddFirewallRulesRequestBody withInboundRules(AddFirewallRulesRequestBodyInboundRules[] inboundRules) {
        this.inboundRules = inboundRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_rules")
    public AddFirewallRulesRequestBodyOutboundRules[] outboundRules;
    public AddFirewallRulesRequestBody withOutboundRules(AddFirewallRulesRequestBodyOutboundRules[] outboundRules) {
        this.outboundRules = outboundRules;
        return this;
    }
}