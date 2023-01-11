package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetDeploymentInstancesOutput
 * Represents the output of a <code>BatchGetDeploymentInstances</code> operation.
**/
public class BatchGetDeploymentInstancesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchGetDeploymentInstancesOutput withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instancesSummary")
    public InstanceSummary[] instancesSummary;
    public BatchGetDeploymentInstancesOutput withInstancesSummary(InstanceSummary[] instancesSummary) {
        this.instancesSummary = instancesSummary;
        return this;
    }
}