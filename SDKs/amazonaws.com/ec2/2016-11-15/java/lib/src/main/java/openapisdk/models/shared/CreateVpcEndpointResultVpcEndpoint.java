package openapisdk.models.shared;



/**
 * CreateVpcEndpointResultVpcEndpoint
 * Information about the endpoint.
**/
public class CreateVpcEndpointResultVpcEndpoint {
    public java.util.Map<String, Object> creationTimestamp;
    public CreateVpcEndpointResultVpcEndpoint withCreationTimestamp(java.util.Map<String, Object> creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    public java.util.Map<String, Object> dnsEntries;
    public CreateVpcEndpointResultVpcEndpoint withDnsEntries(java.util.Map<String, Object> dnsEntries) {
        this.dnsEntries = dnsEntries;
        return this;
    }
    public java.util.Map<String, Object> groups;
    public CreateVpcEndpointResultVpcEndpoint withGroups(java.util.Map<String, Object> groups) {
        this.groups = groups;
        return this;
    }
    public CreateVpcEndpointResultVpcEndpointLastError lastError;
    public CreateVpcEndpointResultVpcEndpoint withLastError(CreateVpcEndpointResultVpcEndpointLastError lastError) {
        this.lastError = lastError;
        return this;
    }
    public java.util.Map<String, Object> networkInterfaceIds;
    public CreateVpcEndpointResultVpcEndpoint withNetworkInterfaceIds(java.util.Map<String, Object> networkInterfaceIds) {
        this.networkInterfaceIds = networkInterfaceIds;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateVpcEndpointResultVpcEndpoint withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> policyDocument;
    public CreateVpcEndpointResultVpcEndpoint withPolicyDocument(java.util.Map<String, Object> policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    public java.util.Map<String, Object> privateDnsEnabled;
    public CreateVpcEndpointResultVpcEndpoint withPrivateDnsEnabled(java.util.Map<String, Object> privateDnsEnabled) {
        this.privateDnsEnabled = privateDnsEnabled;
        return this;
    }
    public java.util.Map<String, Object> requesterManaged;
    public CreateVpcEndpointResultVpcEndpoint withRequesterManaged(java.util.Map<String, Object> requesterManaged) {
        this.requesterManaged = requesterManaged;
        return this;
    }
    public java.util.Map<String, Object> routeTableIds;
    public CreateVpcEndpointResultVpcEndpoint withRouteTableIds(java.util.Map<String, Object> routeTableIds) {
        this.routeTableIds = routeTableIds;
        return this;
    }
    public java.util.Map<String, Object> serviceName;
    public CreateVpcEndpointResultVpcEndpoint withServiceName(java.util.Map<String, Object> serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateVpcEndpointResultVpcEndpoint withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> subnetIds;
    public CreateVpcEndpointResultVpcEndpoint withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateVpcEndpointResultVpcEndpoint withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> vpcEndpointId;
    public CreateVpcEndpointResultVpcEndpoint withVpcEndpointId(java.util.Map<String, Object> vpcEndpointId) {
        this.vpcEndpointId = vpcEndpointId;
        return this;
    }
    public java.util.Map<String, Object> vpcEndpointType;
    public CreateVpcEndpointResultVpcEndpoint withVpcEndpointType(java.util.Map<String, Object> vpcEndpointType) {
        this.vpcEndpointType = vpcEndpointType;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateVpcEndpointResultVpcEndpoint withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}