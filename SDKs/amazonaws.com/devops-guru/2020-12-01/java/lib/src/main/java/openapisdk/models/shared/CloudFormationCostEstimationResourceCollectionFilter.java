package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudFormationCostEstimationResourceCollectionFilter
 * Information about an AWS CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze AWS resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost to analyze the AWS resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>AWS CloudFormation User Guide</i>.
**/
public class CloudFormationCostEstimationResourceCollectionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackNames")
    public String[] stackNames;
    public CloudFormationCostEstimationResourceCollectionFilter withStackNames(String[] stackNames) {
        this.stackNames = stackNames;
        return this;
    }
}