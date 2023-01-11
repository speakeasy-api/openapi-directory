package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllDroplets200ApplicationJsonDropletsNetworksV6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateway")
    public String gateway;
    public ListAllDroplets200ApplicationJsonDropletsNetworksV6 withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public ListAllDroplets200ApplicationJsonDropletsNetworksV6 withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netmask")
    public Long netmask;
    public ListAllDroplets200ApplicationJsonDropletsNetworksV6 withNetmask(Long netmask) {
        this.netmask = netmask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum type;
    public ListAllDroplets200ApplicationJsonDropletsNetworksV6 withType(ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum type) {
        this.type = type;
        return this;
    }
}