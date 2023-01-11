package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouteFilterPrefix
 * Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.
**/
public class RouteFilterPrefix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidr")
    public String cidr;
    public RouteFilterPrefix withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
}