package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEc2InstanceLimitsInput
 * Represents the input for a request operation.
**/
public class DescribeEc2InstanceLimitsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EC2InstanceType")
    public Ec2InstanceTypeEnum ec2InstanceType;
    public DescribeEc2InstanceLimitsInput withEc2InstanceType(Ec2InstanceTypeEnum ec2InstanceType) {
        this.ec2InstanceType = ec2InstanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public DescribeEc2InstanceLimitsInput withLocation(String location) {
        this.location = location;
        return this;
    }
}