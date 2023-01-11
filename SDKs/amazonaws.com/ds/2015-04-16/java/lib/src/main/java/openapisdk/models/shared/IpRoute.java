package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpRoute
 * IP address block. This is often the address block of the DNS server used for your self-managed domain. 
**/
public class IpRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CidrIp")
    public String cidrIp;
    public IpRoute withCidrIp(String cidrIp) {
        this.cidrIp = cidrIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public IpRoute withDescription(String description) {
        this.description = description;
        return this;
    }
}