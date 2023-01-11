package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubnetMapping
 * The ID for a subnet that you want to associate with the firewall. This is used with <a>CreateFirewall</a> and <a>AssociateSubnets</a>. AWS Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
**/
public class SubnetMapping {
    @JsonProperty("SubnetId")
    public String subnetId;
    public SubnetMapping withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}