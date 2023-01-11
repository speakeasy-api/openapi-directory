package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeregisterOnPremisesInstanceInput
 * Represents the input of a <code>DeregisterOnPremisesInstance</code> operation.
**/
public class DeregisterOnPremisesInstanceInput {
    @JsonProperty("instanceName")
    public String instanceName;
    public DeregisterOnPremisesInstanceInput withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}