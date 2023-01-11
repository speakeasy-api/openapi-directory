package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirewallConfig
 * Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
**/
public class FirewallConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallFailOpen")
    public FirewallFailOpenStatusEnum firewallFailOpen;
    public FirewallConfig withFirewallFailOpen(FirewallFailOpenStatusEnum firewallFailOpen) {
        this.firewallFailOpen = firewallFailOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public FirewallConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerId")
    public String ownerId;
    public FirewallConfig withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public FirewallConfig withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}