package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateFirewallRequestBodyOutboundRules {
    @JsonProperty("destinations")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 destinations;
    public CreateFirewallRequestBodyOutboundRules withDestinations(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonProperty("ports")
    public String ports;
    public CreateFirewallRequestBodyOutboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public CreateFirewallRequestBodyOutboundRulesProtocolEnum protocol;
    public CreateFirewallRequestBodyOutboundRules withProtocol(CreateFirewallRequestBodyOutboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}