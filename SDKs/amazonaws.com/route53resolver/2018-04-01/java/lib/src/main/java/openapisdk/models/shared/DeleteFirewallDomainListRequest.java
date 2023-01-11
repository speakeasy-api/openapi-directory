package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFirewallDomainListRequest {
    @JsonProperty("FirewallDomainListId")
    public String firewallDomainListId;
    public DeleteFirewallDomainListRequest withFirewallDomainListId(String firewallDomainListId) {
        this.firewallDomainListId = firewallDomainListId;
        return this;
    }
}