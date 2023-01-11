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
    @JsonProperty("subnetId")
    public String subnetId;
    public NetworkInterface withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}