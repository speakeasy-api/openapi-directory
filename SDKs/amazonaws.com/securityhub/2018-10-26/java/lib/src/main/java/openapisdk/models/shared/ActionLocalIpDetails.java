package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionLocalIpDetails
 * Provides information about the IP address where the scanned port is located.
**/
public class ActionLocalIpDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddressV4")
    public String ipAddressV4;
    public ActionLocalIpDetails withIpAddressV4(String ipAddressV4) {
        this.ipAddressV4 = ipAddressV4;
        return this;
    }
}