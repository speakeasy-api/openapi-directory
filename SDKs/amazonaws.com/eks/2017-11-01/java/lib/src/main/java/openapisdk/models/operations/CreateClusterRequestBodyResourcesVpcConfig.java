package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateClusterRequestBodyResourcesVpcConfig
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
public class CreateClusterRequestBodyResourcesVpcConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointPrivateAccess")
    public Boolean endpointPrivateAccess;
    public CreateClusterRequestBodyResourcesVpcConfig withEndpointPrivateAccess(Boolean endpointPrivateAccess) {
        this.endpointPrivateAccess = endpointPrivateAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointPublicAccess")
    public Boolean endpointPublicAccess;
    public CreateClusterRequestBodyResourcesVpcConfig withEndpointPublicAccess(Boolean endpointPublicAccess) {
        this.endpointPublicAccess = endpointPublicAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicAccessCidrs")
    public String[] publicAccessCidrs;
    public CreateClusterRequestBodyResourcesVpcConfig withPublicAccessCidrs(String[] publicAccessCidrs) {
        this.publicAccessCidrs = publicAccessCidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroupIds")
    public String[] securityGroupIds;
    public CreateClusterRequestBodyResourcesVpcConfig withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetIds")
    public String[] subnetIds;
    public CreateClusterRequestBodyResourcesVpcConfig withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
}