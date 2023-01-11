package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectoryVpcSettingsDescription
 * Contains information about the directory.
**/
public class DirectoryVpcSettingsDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZones")
    public String[] availabilityZones;
    public DirectoryVpcSettingsDescription withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupId")
    public String securityGroupId;
    public DirectoryVpcSettingsDescription withSecurityGroupId(String securityGroupId) {
        this.securityGroupId = securityGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public DirectoryVpcSettingsDescription withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public DirectoryVpcSettingsDescription withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}