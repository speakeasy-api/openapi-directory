package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCompanyNetworkConfigurationRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public UpdateCompanyNetworkConfigurationRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public UpdateCompanyNetworkConfigurationRequestBody withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public UpdateCompanyNetworkConfigurationRequestBody withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonProperty("VpcId")
    public String vpcId;
    public UpdateCompanyNetworkConfigurationRequestBody withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}