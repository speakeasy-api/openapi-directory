package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddFirewallRulesRequestBodyOutboundRules {
    @JsonProperty("destinations")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 destinations;
    public AddFirewallRulesRequestBodyOutboundRules withDestinations(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonProperty("ports")
    public String ports;
    public AddFirewallRulesRequestBodyOutboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public AddFirewallRulesRequestBodyOutboundRulesProtocolEnum protocol;
    public AddFirewallRulesRequestBodyOutboundRules withProtocol(AddFirewallRulesRequestBodyOutboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}