package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudFormationHealth
 *  Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack. 
**/
public class CloudFormationHealth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Insight")
    public InsightHealth insight;
    public CloudFormationHealth withInsight(InsightHealth insight) {
        this.insight = insight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackName")
    public String stackName;
    public CloudFormationHealth withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
}