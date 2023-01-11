package openapisdk.models.shared;



/**
 * CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
public class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo {
    public java.util.Map<String, Object> cidrBlock;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withCidrBlock(java.util.Map<String, Object> cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    public java.util.Map<String, Object> cidrBlockSet;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withCidrBlockSet(java.util.Map<String, Object> cidrBlockSet) {
        this.cidrBlockSet = cidrBlockSet;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlockSet;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withIpv6CidrBlockSet(java.util.Map<String, Object> ipv6CidrBlockSet) {
        this.ipv6CidrBlockSet = ipv6CidrBlockSet;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions peeringOptions;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withPeeringOptions(CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions peeringOptions) {
        this.peeringOptions = peeringOptions;
        return this;
    }
    public java.util.Map<String, Object> region;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}