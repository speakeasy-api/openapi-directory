package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetOnPremisesInstancesInput
 * Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.
**/
public class BatchGetOnPremisesInstancesInput {
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public BatchGetOnPremisesInstancesInput withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
}