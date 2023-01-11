package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDeploymentInstanceOutput
 *  Represents the output of a <code>GetDeploymentInstance</code> operation. 
**/
public class GetDeploymentInstanceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceSummary")
    public InstanceSummary instanceSummary;
    public GetDeploymentInstanceOutput withInstanceSummary(InstanceSummary instanceSummary) {
        this.instanceSummary = instanceSummary;
        return this;
    }
}