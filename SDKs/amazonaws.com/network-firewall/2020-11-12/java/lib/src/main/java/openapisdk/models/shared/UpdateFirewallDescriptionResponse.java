package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFirewallDescriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateFirewallDescriptionResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallArn")
    public String firewallArn;
    public UpdateFirewallDescriptionResponse withFirewallArn(String firewallArn) {
        this.firewallArn = firewallArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallName")
    public String firewallName;
    public UpdateFirewallDescriptionResponse withFirewallName(String firewallName) {
        this.firewallName = firewallName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateToken")
    public String updateToken;
    public UpdateFirewallDescriptionResponse withUpdateToken(String updateToken) {
        this.updateToken = updateToken;
        return this;
    }
}