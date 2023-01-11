package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFirewallRulesRequestBodyOutboundRules {
    @JsonProperty("destinations")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 destinations;
    public DeleteFirewallRulesRequestBodyOutboundRules withDestinations(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonProperty("ports")
    public String ports;
    public DeleteFirewallRulesRequestBodyOutboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum protocol;
    public DeleteFirewallRulesRequestBodyOutboundRules withProtocol(DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}