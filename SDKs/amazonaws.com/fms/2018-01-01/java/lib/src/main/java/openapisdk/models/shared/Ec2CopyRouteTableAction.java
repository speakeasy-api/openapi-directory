package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ec2CopyRouteTableAction
 * An action that copies the EC2 route table for use in remediation.
**/
public class Ec2CopyRouteTableAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Ec2CopyRouteTableAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("RouteTableId")
    public ActionTarget routeTableId;
    public Ec2CopyRouteTableAction withRouteTableId(ActionTarget routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @JsonProperty("VpcId")
    public ActionTarget vpcId;
    public Ec2CopyRouteTableAction withVpcId(ActionTarget vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}