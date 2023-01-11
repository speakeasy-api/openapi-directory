package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceCollection
 *  A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
**/
public class ResourceCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudFormation")
    public CloudFormationCollection cloudFormation;
    public ResourceCollection withCloudFormation(CloudFormationCollection cloudFormation) {
        this.cloudFormation = cloudFormation;
        return this;
    }
}