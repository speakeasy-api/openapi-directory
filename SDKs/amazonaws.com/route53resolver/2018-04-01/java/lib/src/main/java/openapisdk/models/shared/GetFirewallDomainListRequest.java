package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallDomainListRequest {
    @JsonProperty("FirewallDomainListId")
    public String firewallDomainListId;
    public GetFirewallDomainListRequest withFirewallDomainListId(String firewallDomainListId) {
        this.firewallDomainListId = firewallDomainListId;
        return this;
    }
}