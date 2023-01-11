package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFirewallRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteProtection")
    public Boolean deleteProtection;
    public CreateFirewallRequest withDeleteProtection(Boolean deleteProtection) {
        this.deleteProtection = deleteProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateFirewallRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("FirewallName")
    public String firewallName;
    public CreateFirewallRequest withFirewallName(String firewallName) {
        this.firewallName = firewallName;
        return this;
    }
    @JsonProperty("FirewallPolicyArn")
    public String firewallPolicyArn;
    public CreateFirewallRequest withFirewallPolicyArn(String firewallPolicyArn) {
        this.firewallPolicyArn = firewallPolicyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallPolicyChangeProtection")
    public Boolean firewallPolicyChangeProtection;
    public CreateFirewallRequest withFirewallPolicyChangeProtection(Boolean firewallPolicyChangeProtection) {
        this.firewallPolicyChangeProtection = firewallPolicyChangeProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetChangeProtection")
    public Boolean subnetChangeProtection;
    public CreateFirewallRequest withSubnetChangeProtection(Boolean subnetChangeProtection) {
        this.subnetChangeProtection = subnetChangeProtection;
        return this;
    }
    @JsonProperty("SubnetMappings")
    public SubnetMapping[] subnetMappings;
    public CreateFirewallRequest withSubnetMappings(SubnetMapping[] subnetMappings) {
        this.subnetMappings = subnetMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateFirewallRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("VpcId")
    public String vpcId;
    public CreateFirewallRequest withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}