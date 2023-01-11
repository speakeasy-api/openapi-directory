package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ec2CreateRouteTableAction
 * Information about the CreateRouteTable action in Amazon EC2.
**/
public class Ec2CreateRouteTableAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Ec2CreateRouteTableAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("VpcId")
    public ActionTarget vpcId;
    public Ec2CreateRouteTableAction withVpcId(ActionTarget vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}