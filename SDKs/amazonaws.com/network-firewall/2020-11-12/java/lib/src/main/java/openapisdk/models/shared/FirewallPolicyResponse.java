package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirewallPolicyResponse
 * The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
**/
public class FirewallPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public FirewallPolicyResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("FirewallPolicyArn")
    public String firewallPolicyArn;
    public FirewallPolicyResponse withFirewallPolicyArn(String firewallPolicyArn) {
        this.firewallPolicyArn = firewallPolicyArn;
        return this;
    }
    @JsonProperty("FirewallPolicyId")
    public String firewallPolicyId;
    public FirewallPolicyResponse withFirewallPolicyId(String firewallPolicyId) {
        this.firewallPolicyId = firewallPolicyId;
        return this;
    }
    @JsonProperty("FirewallPolicyName")
    public String firewallPolicyName;
    public FirewallPolicyResponse withFirewallPolicyName(String firewallPolicyName) {
        this.firewallPolicyName = firewallPolicyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallPolicyStatus")
    public ResourceStatusEnum firewallPolicyStatus;
    public FirewallPolicyResponse withFirewallPolicyStatus(ResourceStatusEnum firewallPolicyStatus) {
        this.firewallPolicyStatus = firewallPolicyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public FirewallPolicyResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}