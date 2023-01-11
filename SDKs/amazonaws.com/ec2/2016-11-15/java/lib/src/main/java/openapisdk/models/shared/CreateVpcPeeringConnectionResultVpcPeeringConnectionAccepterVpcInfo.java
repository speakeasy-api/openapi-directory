package openapisdk.models.shared;



/**
 * CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
public class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo {
    public java.util.Map<String, Object> cidrBlock;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withCidrBlock(java.util.Map<String, Object> cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    public java.util.Map<String, Object> cidrBlockSet;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withCidrBlockSet(java.util.Map<String, Object> cidrBlockSet) {
        this.cidrBlockSet = cidrBlockSet;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlockSet;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withIpv6CidrBlockSet(java.util.Map<String, Object> ipv6CidrBlockSet) {
        this.ipv6CidrBlockSet = ipv6CidrBlockSet;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions peeringOptions;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withPeeringOptions(CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions peeringOptions) {
        this.peeringOptions = peeringOptions;
        return this;
    }
    public java.util.Map<String, Object> region;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}