package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2VpcDetails
 * Details about an EC2 VPC.
**/
public class AwsEc2VpcDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CidrBlockAssociationSet")
    public CidrBlockAssociation[] cidrBlockAssociationSet;
    public AwsEc2VpcDetails withCidrBlockAssociationSet(CidrBlockAssociation[] cidrBlockAssociationSet) {
        this.cidrBlockAssociationSet = cidrBlockAssociationSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DhcpOptionsId")
    public String dhcpOptionsId;
    public AwsEc2VpcDetails withDhcpOptionsId(String dhcpOptionsId) {
        this.dhcpOptionsId = dhcpOptionsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ipv6CidrBlockAssociationSet")
    public Ipv6CidrBlockAssociation[] ipv6CidrBlockAssociationSet;
    public AwsEc2VpcDetails withIpv6CidrBlockAssociationSet(Ipv6CidrBlockAssociation[] ipv6CidrBlockAssociationSet) {
        this.ipv6CidrBlockAssociationSet = ipv6CidrBlockAssociationSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public AwsEc2VpcDetails withState(String state) {
        this.state = state;
        return this;
    }
}