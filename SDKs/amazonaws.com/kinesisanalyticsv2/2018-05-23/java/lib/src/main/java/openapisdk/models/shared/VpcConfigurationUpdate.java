package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcConfigurationUpdate
 * Describes updates to the VPC configuration used by the application.
**/
public class VpcConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIdUpdates")
    public String[] securityGroupIdUpdates;
    public VpcConfigurationUpdate withSecurityGroupIdUpdates(String[] securityGroupIdUpdates) {
        this.securityGroupIdUpdates = securityGroupIdUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIdUpdates")
    public String[] subnetIdUpdates;
    public VpcConfigurationUpdate withSubnetIdUpdates(String[] subnetIdUpdates) {
        this.subnetIdUpdates = subnetIdUpdates;
        return this;
    }
    @JsonProperty("VpcConfigurationId")
    public String vpcConfigurationId;
    public VpcConfigurationUpdate withVpcConfigurationId(String vpcConfigurationId) {
        this.vpcConfigurationId = vpcConfigurationId;
        return this;
    }
}