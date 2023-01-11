package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * EndpointAccess
 * Describes a Redshift-managed VPC endpoint.
**/
public class EndpointAccess {
    public String address;
    public EndpointAccess withAddress(String address) {
        this.address = address;
        return this;
    }
    public String clusterIdentifier;
    public EndpointAccess withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    public OffsetDateTime endpointCreateTime;
    public EndpointAccess withEndpointCreateTime(OffsetDateTime endpointCreateTime) {
        this.endpointCreateTime = endpointCreateTime;
        return this;
    }
    public String endpointName;
    public EndpointAccess withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
    public String endpointStatus;
    public EndpointAccess withEndpointStatus(String endpointStatus) {
        this.endpointStatus = endpointStatus;
        return this;
    }
    public Long port;
    public EndpointAccess withPort(Long port) {
        this.port = port;
        return this;
    }
    public String resourceOwner;
    public EndpointAccess withResourceOwner(String resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    public String subnetGroupName;
    public EndpointAccess withSubnetGroupName(String subnetGroupName) {
        this.subnetGroupName = subnetGroupName;
        return this;
    }
    public VpcEndpoint vpcEndpoint;
    public EndpointAccess withVpcEndpoint(VpcEndpoint vpcEndpoint) {
        this.vpcEndpoint = vpcEndpoint;
        return this;
    }
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public EndpointAccess withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}