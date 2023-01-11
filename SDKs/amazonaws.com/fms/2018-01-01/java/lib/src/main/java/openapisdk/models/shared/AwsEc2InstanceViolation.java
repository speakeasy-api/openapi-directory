package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2InstanceViolation
 * Violation detail for an EC2 instance resource.
**/
public class AwsEc2InstanceViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsEc2NetworkInterfaceViolations")
    public AwsEc2NetworkInterfaceViolation[] awsEc2NetworkInterfaceViolations;
    public AwsEc2InstanceViolation withAwsEc2NetworkInterfaceViolations(AwsEc2NetworkInterfaceViolation[] awsEc2NetworkInterfaceViolations) {
        this.awsEc2NetworkInterfaceViolations = awsEc2NetworkInterfaceViolations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public AwsEc2InstanceViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
}