package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFirewallPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateFirewallPolicyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public CreateFirewallPolicyRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("FirewallPolicy")
    public FirewallPolicy firewallPolicy;
    public CreateFirewallPolicyRequest withFirewallPolicy(FirewallPolicy firewallPolicy) {
        this.firewallPolicy = firewallPolicy;
        return this;
    }
    @JsonProperty("FirewallPolicyName")
    public String firewallPolicyName;
    public CreateFirewallPolicyRequest withFirewallPolicyName(String firewallPolicyName) {
        this.firewallPolicyName = firewallPolicyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateFirewallPolicyRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}