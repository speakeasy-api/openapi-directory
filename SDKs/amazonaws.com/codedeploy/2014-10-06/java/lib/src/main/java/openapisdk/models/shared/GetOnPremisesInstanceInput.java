package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetOnPremisesInstanceInput
 *  Represents the input of a <code>GetOnPremisesInstance</code> operation. 
**/
public class GetOnPremisesInstanceInput {
    @JsonProperty("instanceName")
    public String instanceName;
    public GetOnPremisesInstanceInput withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}