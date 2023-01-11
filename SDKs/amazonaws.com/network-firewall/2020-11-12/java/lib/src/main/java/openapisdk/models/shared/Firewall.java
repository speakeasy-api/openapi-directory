package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Firewall
 * <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
**/
public class Firewall {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteProtection")
    public Boolean deleteProtection;
    public Firewall withDeleteProtection(Boolean deleteProtection) {
        this.deleteProtection = deleteProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Firewall withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallArn")
    public String firewallArn;
    public Firewall withFirewallArn(String firewallArn) {
        this.firewallArn = firewallArn;
        return this;
    }
    @JsonProperty("FirewallId")
    public String firewallId;
    public Firewall withFirewallId(String firewallId) {
        this.firewallId = firewallId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallName")
    public String firewallName;
    public Firewall withFirewallName(String firewallName) {
        this.firewallName = firewallName;
        return this;
    }
    @JsonProperty("FirewallPolicyArn")
    public String firewallPolicyArn;
    public Firewall withFirewallPolicyArn(String firewallPolicyArn) {
        this.firewallPolicyArn = firewallPolicyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallPolicyChangeProtection")
    public Boolean firewallPolicyChangeProtection;
    public Firewall withFirewallPolicyChangeProtection(Boolean firewallPolicyChangeProtection) {
        this.firewallPolicyChangeProtection = firewallPolicyChangeProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetChangeProtection")
    public Boolean subnetChangeProtection;
    public Firewall withSubnetChangeProtection(Boolean subnetChangeProtection) {
        this.subnetChangeProtection = subnetChangeProtection;
        return this;
    }
    @JsonProperty("SubnetMappings")
    public SubnetMapping[] subnetMappings;
    public Firewall withSubnetMappings(SubnetMapping[] subnetMappings) {
        this.subnetMappings = subnetMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public Firewall withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("VpcId")
    public String vpcId;
    public Firewall withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}