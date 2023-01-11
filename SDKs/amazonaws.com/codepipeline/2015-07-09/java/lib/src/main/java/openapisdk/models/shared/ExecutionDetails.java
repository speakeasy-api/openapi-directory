package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionDetails
 * The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
**/
public class ExecutionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalExecutionId")
    public String externalExecutionId;
    public ExecutionDetails withExternalExecutionId(String externalExecutionId) {
        this.externalExecutionId = externalExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentComplete")
    public Long percentComplete;
    public ExecutionDetails withPercentComplete(Long percentComplete) {
        this.percentComplete = percentComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public ExecutionDetails withSummary(String summary) {
        this.summary = summary;
        return this;
    }
}