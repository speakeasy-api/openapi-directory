package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkInterface
 * Describes a network interface.
**/
public class NetworkInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaceId")
    public String networkInterfaceId;
    public NetworkInterface withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateIpAddress")
    public String privateIpAddress;
    public NetworkInterface withPrivateIpAddress(String privateIpAddress) {
        this.privateIpAddress = privateIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicIpAddress")
    public String publicIpAddress;
    public NetworkInterface withPublicIpAddress(String publicIpAddress) {
        this.publicIpAddress = publicIpAddress;
        return this;
    }
}