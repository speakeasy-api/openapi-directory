package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExpectedRoute
 * Information about the expected route in the route table.
**/
public class ExpectedRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedTargets")
    public String[] allowedTargets;
    public ExpectedRoute withAllowedTargets(String[] allowedTargets) {
        this.allowedTargets = allowedTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContributingSubnets")
    public String[] contributingSubnets;
    public ExpectedRoute withContributingSubnets(String[] contributingSubnets) {
        this.contributingSubnets = contributingSubnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpV4Cidr")
    public String ipV4Cidr;
    public ExpectedRoute withIpV4Cidr(String ipV4Cidr) {
        this.ipV4Cidr = ipV4Cidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpV6Cidr")
    public String ipV6Cidr;
    public ExpectedRoute withIpV6Cidr(String ipV6Cidr) {
        this.ipV6Cidr = ipV6Cidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrefixListId")
    public String prefixListId;
    public ExpectedRoute withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteTableId")
    public String routeTableId;
    public ExpectedRoute withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
}