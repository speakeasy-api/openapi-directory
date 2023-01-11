package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCloudFormationCollectionFilter
 *  Contains the names of AWS CloudFormation stacks used to update a collection of stacks. You can specify up to 500 AWS CloudFormation stacks.
**/
public class UpdateCloudFormationCollectionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackNames")
    public String[] stackNames;
    public UpdateCloudFormationCollectionFilter withStackNames(String[] stackNames) {
        this.stackNames = stackNames;
        return this;
    }
}