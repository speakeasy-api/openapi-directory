package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPipelineExecutionsOutput
 * Represents the output of a <code>ListPipelineExecutions</code> action.
**/
public class ListPipelineExecutionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPipelineExecutionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionSummaries")
    public PipelineExecutionSummary[] pipelineExecutionSummaries;
    public ListPipelineExecutionsOutput withPipelineExecutionSummaries(PipelineExecutionSummary[] pipelineExecutionSummaries) {
        this.pipelineExecutionSummaries = pipelineExecutionSummaries;
        return this;
    }
}