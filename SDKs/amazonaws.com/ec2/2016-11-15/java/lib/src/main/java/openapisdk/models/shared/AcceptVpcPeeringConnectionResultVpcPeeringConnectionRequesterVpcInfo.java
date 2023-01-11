package openapisdk.models.shared;



/**
 * AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
public class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo {
    public java.util.Map<String, Object> cidrBlock;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withCidrBlock(java.util.Map<String, Object> cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    public java.util.Map<String, Object> cidrBlockSet;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withCidrBlockSet(java.util.Map<String, Object> cidrBlockSet) {
        this.cidrBlockSet = cidrBlockSet;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlockSet;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withIpv6CidrBlockSet(java.util.Map<String, Object> ipv6CidrBlockSet) {
        this.ipv6CidrBlockSet = ipv6CidrBlockSet;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions peeringOptions;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withPeeringOptions(AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions peeringOptions) {
        this.peeringOptions = peeringOptions;
        return this;
    }
    public java.util.Map<String, Object> region;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}