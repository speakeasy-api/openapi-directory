package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEc2InstanceLimitsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeEc2InstanceLimitsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EC2InstanceLimits")
    public Ec2InstanceLimit[] ec2InstanceLimits;
    public DescribeEc2InstanceLimitsOutput withEc2InstanceLimits(Ec2InstanceLimit[] ec2InstanceLimits) {
        this.ec2InstanceLimits = ec2InstanceLimits;
        return this;
    }
}