package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubnetGroup
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p>CreateSubnetGroup</p> </li> <li> <p>UpdateSubnetGroup</p> </li> </ul> <p>A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.</p>
**/
public class SubnetGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public SubnetGroup withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public SubnetGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SubnetGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subnets")
    public Subnet[] subnets;
    public SubnetGroup withSubnets(Subnet[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public SubnetGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}