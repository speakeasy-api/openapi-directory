package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2NetworkInterfaceIpV6AddressDetail
 * Provides information about an IPV6 address that is associated with the network interface.
**/
public class AwsEc2NetworkInterfaceIpV6AddressDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpV6Address")
    public String ipV6Address;
    public AwsEc2NetworkInterfaceIpV6AddressDetail withIpV6Address(String ipV6Address) {
        this.ipV6Address = ipV6Address;
        return this;
    }
}