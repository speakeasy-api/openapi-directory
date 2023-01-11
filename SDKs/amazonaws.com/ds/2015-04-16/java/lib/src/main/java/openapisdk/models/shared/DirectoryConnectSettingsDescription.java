package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectoryConnectSettingsDescription
 * Contains information about an AD Connector directory.
**/
public class DirectoryConnectSettingsDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZones")
    public String[] availabilityZones;
    public DirectoryConnectSettingsDescription withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectIps")
    public String[] connectIps;
    public DirectoryConnectSettingsDescription withConnectIps(String[] connectIps) {
        this.connectIps = connectIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerUserName")
    public String customerUserName;
    public DirectoryConnectSettingsDescription withCustomerUserName(String customerUserName) {
        this.customerUserName = customerUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupId")
    public String securityGroupId;
    public DirectoryConnectSettingsDescription withSecurityGroupId(String securityGroupId) {
        this.securityGroupId = securityGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public DirectoryConnectSettingsDescription withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public DirectoryConnectSettingsDescription withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}