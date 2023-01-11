package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpSet
 * A complex type for the set of IP addresses for an accelerator.
**/
public class IpSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddresses")
    public String[] ipAddresses;
    public IpSet withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpFamily")
    public String ipFamily;
    public IpSet withIpFamily(String ipFamily) {
        this.ipFamily = ipFamily;
        return this;
    }
}