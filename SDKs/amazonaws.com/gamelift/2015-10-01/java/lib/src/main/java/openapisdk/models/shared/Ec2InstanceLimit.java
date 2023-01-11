package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ec2InstanceLimit
 * <p>The GameLift service limits for an EC2 instance type and current utilization. GameLift allows AWS accounts a maximum number of instances, per instance type, per AWS Region or location, for use with GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the GameLift console.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeEC2InstanceLimits</a> </p>
**/
public class Ec2InstanceLimit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentInstances")
    public Long currentInstances;
    public Ec2InstanceLimit withCurrentInstances(Long currentInstances) {
        this.currentInstances = currentInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EC2InstanceType")
    public Ec2InstanceTypeEnum ec2InstanceType;
    public Ec2InstanceLimit withEc2InstanceType(Ec2InstanceTypeEnum ec2InstanceType) {
        this.ec2InstanceType = ec2InstanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceLimit")
    public Long instanceLimit;
    public Ec2InstanceLimit withInstanceLimit(Long instanceLimit) {
        this.instanceLimit = instanceLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public Ec2InstanceLimit withLocation(String location) {
        this.location = location;
        return this;
    }
}