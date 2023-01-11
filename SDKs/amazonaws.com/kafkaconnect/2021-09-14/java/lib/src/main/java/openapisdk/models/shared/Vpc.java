package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Vpc
 * Information about the VPC in which the connector resides.
**/
public class Vpc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public String[] securityGroups;
    public Vpc withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonProperty("subnets")
    public String[] subnets;
    public Vpc withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}