package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllDroplets200ApplicationJsonDropletsNetworksV4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateway")
    public String gateway;
    public ListAllDroplets200ApplicationJsonDropletsNetworksV4 withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public ListAllDroplets200ApplicationJsonDropletsNetworksV4 withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netmask")
    public String netmask;
    public ListAllDroplets200ApplicationJsonDropletsNetworksV4 withNetmask(String netmask) {
        this.netmask = netmask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum type;
    public ListAllDroplets200ApplicationJsonDropletsNetworksV4 withType(ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum type) {
        this.type = type;
        return this;
    }
}