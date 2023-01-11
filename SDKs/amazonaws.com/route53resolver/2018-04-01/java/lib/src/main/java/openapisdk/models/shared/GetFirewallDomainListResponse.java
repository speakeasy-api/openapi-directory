package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallDomainListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallDomainList")
    public FirewallDomainList firewallDomainList;
    public GetFirewallDomainListResponse withFirewallDomainList(FirewallDomainList firewallDomainList) {
        this.firewallDomainList = firewallDomainList;
        return this;
    }
}