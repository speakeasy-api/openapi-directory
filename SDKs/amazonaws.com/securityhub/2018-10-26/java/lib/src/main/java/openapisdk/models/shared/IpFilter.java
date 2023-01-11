package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpFilter
 * The IP filter for querying findings.
**/
public class IpFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cidr")
    public String cidr;
    public IpFilter withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
}