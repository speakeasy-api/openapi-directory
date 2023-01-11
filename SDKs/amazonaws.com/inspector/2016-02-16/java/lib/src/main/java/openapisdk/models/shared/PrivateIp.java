package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateIp
 * Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action.
**/
public class PrivateIp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateDnsName")
    public String privateDnsName;
    public PrivateIp withPrivateDnsName(String privateDnsName) {
        this.privateDnsName = privateDnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateIpAddress")
    public String privateIpAddress;
    public PrivateIp withPrivateIpAddress(String privateIpAddress) {
        this.privateIpAddress = privateIpAddress;
        return this;
    }
}