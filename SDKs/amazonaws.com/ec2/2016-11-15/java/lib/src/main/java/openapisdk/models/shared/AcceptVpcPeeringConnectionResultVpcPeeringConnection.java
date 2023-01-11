package openapisdk.models.shared;



/**
 * AcceptVpcPeeringConnectionResultVpcPeeringConnection
 * Information about the VPC peering connection.
**/
public class AcceptVpcPeeringConnectionResultVpcPeeringConnection {
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo accepterVpcInfo;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnection withAccepterVpcInfo(AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo accepterVpcInfo) {
        this.accepterVpcInfo = accepterVpcInfo;
        return this;
    }
    public java.util.Map<String, Object> expirationTime;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnection withExpirationTime(java.util.Map<String, Object> expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo requesterVpcInfo;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnection withRequesterVpcInfo(AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo requesterVpcInfo) {
        this.requesterVpcInfo = requesterVpcInfo;
        return this;
    }
    public AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus status;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnection withStatus(AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnection withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> vpcPeeringConnectionId;
    public AcceptVpcPeeringConnectionResultVpcPeeringConnection withVpcPeeringConnectionId(java.util.Map<String, Object> vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}