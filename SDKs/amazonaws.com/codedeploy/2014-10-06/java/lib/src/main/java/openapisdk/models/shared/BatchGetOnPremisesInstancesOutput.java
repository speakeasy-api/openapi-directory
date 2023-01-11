package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetOnPremisesInstancesOutput
 * Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.
**/
public class BatchGetOnPremisesInstancesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceInfos")
    public InstanceInfo[] instanceInfos;
    public BatchGetOnPremisesInstancesOutput withInstanceInfos(InstanceInfo[] instanceInfos) {
        this.instanceInfos = instanceInfos;
        return this;
    }
}