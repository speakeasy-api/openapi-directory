package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DirectoryVpcSettings
 * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
**/
public class DirectoryVpcSettings {
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public DirectoryVpcSettings withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonProperty("VpcId")
    public String vpcId;
    public DirectoryVpcSettings withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}