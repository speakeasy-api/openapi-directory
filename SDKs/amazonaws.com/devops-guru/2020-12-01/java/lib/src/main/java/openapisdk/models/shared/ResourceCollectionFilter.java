package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceCollectionFilter
 *  Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. 
**/
public class ResourceCollectionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudFormation")
    public CloudFormationCollectionFilter cloudFormation;
    public ResourceCollectionFilter withCloudFormation(CloudFormationCollectionFilter cloudFormation) {
        this.cloudFormation = cloudFormation;
        return this;
    }
}