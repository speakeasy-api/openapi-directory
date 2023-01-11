package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_id")
    public Long dropletId;
    public Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges withDropletId(Long dropletId) {
        this.dropletId = dropletId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removing")
    public Boolean removing;
    public Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges withRemoving(Boolean removing) {
        this.removing = removing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges withStatus(String status) {
        this.status = status;
        return this;
    }
}