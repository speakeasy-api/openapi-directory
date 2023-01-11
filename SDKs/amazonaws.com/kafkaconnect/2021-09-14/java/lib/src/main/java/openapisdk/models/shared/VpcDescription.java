package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcDescription
 * The description of the VPC in which the connector resides.
**/
public class VpcDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public String[] securityGroups;
    public VpcDescription withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public String[] subnets;
    public VpcDescription withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}