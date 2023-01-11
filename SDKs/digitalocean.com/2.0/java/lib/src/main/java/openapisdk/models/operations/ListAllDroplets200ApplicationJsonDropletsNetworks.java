package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAllDroplets200ApplicationJsonDropletsNetworks
 * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
**/
public class ListAllDroplets200ApplicationJsonDropletsNetworks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v4")
    public ListAllDroplets200ApplicationJsonDropletsNetworksV4[] v4;
    public ListAllDroplets200ApplicationJsonDropletsNetworks withV4(ListAllDroplets200ApplicationJsonDropletsNetworksV4[] v4) {
        this.v4 = v4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v6")
    public ListAllDroplets200ApplicationJsonDropletsNetworksV6[] v6;
    public ListAllDroplets200ApplicationJsonDropletsNetworks withV6(ListAllDroplets200ApplicationJsonDropletsNetworksV6[] v6) {
        this.v6 = v6;
        return this;
    }
}