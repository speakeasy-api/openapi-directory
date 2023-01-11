package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ec2ReplaceRouteAction
 * Information about the ReplaceRoute action in Amazon EC2.
**/
public class Ec2ReplaceRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Ec2ReplaceRouteAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCidrBlock")
    public String destinationCidrBlock;
    public Ec2ReplaceRouteAction withDestinationCidrBlock(String destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationIpv6CidrBlock")
    public String destinationIpv6CidrBlock;
    public Ec2ReplaceRouteAction withDestinationIpv6CidrBlock(String destinationIpv6CidrBlock) {
        this.destinationIpv6CidrBlock = destinationIpv6CidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationPrefixListId")
    public String destinationPrefixListId;
    public Ec2ReplaceRouteAction withDestinationPrefixListId(String destinationPrefixListId) {
        this.destinationPrefixListId = destinationPrefixListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayId")
    public ActionTarget gatewayId;
    public Ec2ReplaceRouteAction withGatewayId(ActionTarget gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonProperty("RouteTableId")
    public ActionTarget routeTableId;
    public Ec2ReplaceRouteAction withRouteTableId(ActionTarget routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
}