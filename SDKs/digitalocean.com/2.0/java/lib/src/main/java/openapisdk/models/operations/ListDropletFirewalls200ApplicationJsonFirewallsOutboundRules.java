package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules {
    @JsonProperty("destinations")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 destinations;
    public ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules withDestinations(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonProperty("ports")
    public String ports;
    public ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules withPorts(String ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("protocol")
    public ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum protocol;
    public ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules withProtocol(ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}