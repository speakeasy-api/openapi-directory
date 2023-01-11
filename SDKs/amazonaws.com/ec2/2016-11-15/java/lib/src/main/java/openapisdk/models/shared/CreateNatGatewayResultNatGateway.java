package openapisdk.models.shared;



/**
 * CreateNatGatewayResultNatGateway
 * Information about the NAT gateway.
**/
public class CreateNatGatewayResultNatGateway {
    public java.util.Map<String, Object> connectivityType;
    public CreateNatGatewayResultNatGateway withConnectivityType(java.util.Map<String, Object> connectivityType) {
        this.connectivityType = connectivityType;
        return this;
    }
    public java.util.Map<String, Object> createTime;
    public CreateNatGatewayResultNatGateway withCreateTime(java.util.Map<String, Object> createTime) {
        this.createTime = createTime;
        return this;
    }
    public java.util.Map<String, Object> deleteTime;
    public CreateNatGatewayResultNatGateway withDeleteTime(java.util.Map<String, Object> deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    public java.util.Map<String, Object> failureCode;
    public CreateNatGatewayResultNatGateway withFailureCode(java.util.Map<String, Object> failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    public java.util.Map<String, Object> failureMessage;
    public CreateNatGatewayResultNatGateway withFailureMessage(java.util.Map<String, Object> failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
    public java.util.Map<String, Object> natGatewayAddresses;
    public CreateNatGatewayResultNatGateway withNatGatewayAddresses(java.util.Map<String, Object> natGatewayAddresses) {
        this.natGatewayAddresses = natGatewayAddresses;
        return this;
    }
    public java.util.Map<String, Object> natGatewayId;
    public CreateNatGatewayResultNatGateway withNatGatewayId(java.util.Map<String, Object> natGatewayId) {
        this.natGatewayId = natGatewayId;
        return this;
    }
    public CreateNatGatewayResultNatGatewayProvisionedBandwidth provisionedBandwidth;
    public CreateNatGatewayResultNatGateway withProvisionedBandwidth(CreateNatGatewayResultNatGatewayProvisionedBandwidth provisionedBandwidth) {
        this.provisionedBandwidth = provisionedBandwidth;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateNatGatewayResultNatGateway withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> subnetId;
    public CreateNatGatewayResultNatGateway withSubnetId(java.util.Map<String, Object> subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateNatGatewayResultNatGateway withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateNatGatewayResultNatGateway withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}