package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFirewalls200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewalls")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems[] firewalls;
    public ListFirewalls200ApplicationJson withFirewalls(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems[] firewalls) {
        this.firewalls = firewalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListFirewalls200ApplicationJsonLinks links;
    public ListFirewalls200ApplicationJson withLinks(ListFirewalls200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListFirewalls200ApplicationJsonMeta meta;
    public ListFirewalls200ApplicationJson withMeta(ListFirewalls200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}