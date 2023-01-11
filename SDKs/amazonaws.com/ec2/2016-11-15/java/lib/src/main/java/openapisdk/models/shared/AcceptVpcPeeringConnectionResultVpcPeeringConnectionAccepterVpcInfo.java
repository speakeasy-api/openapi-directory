package openapisdk.models.shared;



/**
 * AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
public class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo {
    public java.util.Map<String, Object> cidrBlock;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withCidrBlock(java.util.Map<String, Object> cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    public java.util.Map<String, Object> cidrBlockSet;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withCidrBlockSet(java.util.Map<String, Object> cidrBlockSet) {
        this.cidrBlockSet = cidrBlockSet;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlockSet;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withIpv6CidrBlockSet(java.util.Map<String, Object> ipv6CidrBlockSet) {
        this.ipv6CidrBlockSet = ipv6CidrBlockSet;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions peeringOptions;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withPeeringOptions(AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions peeringOptions) {
        this.peeringOptions = peeringOptions;
        return this;
    }
    public java.util.Map<String, Object> region;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}