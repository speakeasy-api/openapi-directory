package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudFormationCollectionFilter
 *  Information about AWS CloudFormation stacks. You can use up to 500 stacks to specify which AWS resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>AWS CloudFormation User Guide</i>. 
**/
public class CloudFormationCollectionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackNames")
    public String[] stackNames;
    public CloudFormationCollectionFilter withStackNames(String[] stackNames) {
        this.stackNames = stackNames;
        return this;
    }
}