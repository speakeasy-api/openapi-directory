package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateResourceCollectionRequestBodyResourceCollection
 *  Contains information used to update a collection of AWS resources. 
**/
public class UpdateResourceCollectionRequestBodyResourceCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudFormation")
    public openapisdk.models.shared.UpdateCloudFormationCollectionFilter cloudFormation;
    public UpdateResourceCollectionRequestBodyResourceCollection withCloudFormation(openapisdk.models.shared.UpdateCloudFormationCollectionFilter cloudFormation) {
        this.cloudFormation = cloudFormation;
        return this;
    }
}