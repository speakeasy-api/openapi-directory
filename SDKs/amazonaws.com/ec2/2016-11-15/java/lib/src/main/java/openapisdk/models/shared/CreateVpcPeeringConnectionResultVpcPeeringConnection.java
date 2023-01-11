package openapisdk.models.shared;



/**
 * CreateVpcPeeringConnectionResultVpcPeeringConnection
 * Information about the VPC peering connection.
**/
public class CreateVpcPeeringConnectionResultVpcPeeringConnection {
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo accepterVpcInfo;
    public CreateVpcPeeringConnectionResultVpcPeeringConnection withAccepterVpcInfo(CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo accepterVpcInfo) {
        this.accepterVpcInfo = accepterVpcInfo;
        return this;
    }
    public java.util.Map<String, Object> expirationTime;
    public CreateVpcPeeringConnectionResultVpcPeeringConnection withExpirationTime(java.util.Map<String, Object> expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo requesterVpcInfo;
    public CreateVpcPeeringConnectionResultVpcPeeringConnection withRequesterVpcInfo(CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo requesterVpcInfo) {
        this.requesterVpcInfo = requesterVpcInfo;
        return this;
    }
    public CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus status;
    public CreateVpcPeeringConnectionResultVpcPeeringConnection withStatus(CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateVpcPeeringConnectionResultVpcPeeringConnection withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> vpcPeeringConnectionId;
    public CreateVpcPeeringConnectionResultVpcPeeringConnection withVpcPeeringConnectionId(java.util.Map<String, Object> vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}