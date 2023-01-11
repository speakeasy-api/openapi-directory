package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestRepositoryTriggersOutput
 * Represents the output of a test repository triggers operation.
**/
public class TestRepositoryTriggersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedExecutions")
    public RepositoryTriggerExecutionFailure[] failedExecutions;
    public TestRepositoryTriggersOutput withFailedExecutions(RepositoryTriggerExecutionFailure[] failedExecutions) {
        this.failedExecutions = failedExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successfulExecutions")
    public String[] successfulExecutions;
    public TestRepositoryTriggersOutput withSuccessfulExecutions(String[] successfulExecutions) {
        this.successfulExecutions = successfulExecutions;
        return this;
    }
}