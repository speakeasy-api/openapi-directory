package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DirectoryConnectSettings
 * Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
**/
public class DirectoryConnectSettings {
    @JsonProperty("CustomerDnsIps")
    public String[] customerDnsIps;
    public DirectoryConnectSettings withCustomerDnsIps(String[] customerDnsIps) {
        this.customerDnsIps = customerDnsIps;
        return this;
    }
    @JsonProperty("CustomerUserName")
    public String customerUserName;
    public DirectoryConnectSettings withCustomerUserName(String customerUserName) {
        this.customerUserName = customerUserName;
        return this;
    }
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public DirectoryConnectSettings withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonProperty("VpcId")
    public String vpcId;
    public DirectoryConnectSettings withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}