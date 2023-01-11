package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ec2DeleteRouteAction
 * Information about the DeleteRoute action in Amazon EC2.
**/
public class Ec2DeleteRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Ec2DeleteRouteAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCidrBlock")
    public String destinationCidrBlock;
    public Ec2DeleteRouteAction withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationIpv6CidrBlock")
    public String destinationIpv6CidrBlock;
    public Ec2DeleteRouteAction withDestinationIpv6CidrBlock(String destinationIpv6CidrBlock) {
        this.destinationIpv6CidrBlock = destinationIpv6CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationPrefixListId")
    public String destinationPrefixListId;
    public Ec2DeleteRouteAction withDestinationPrefixListId(String destinationPrefixListId) {
        this.destinationPrefixListId = destinationPrefixListId;
        return this;
    }
    @JsonProperty("RouteTableId")
    public ActionTarget routeTableId;
    public Ec2DeleteRouteAction withRouteTableId(ActionTarget routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
}