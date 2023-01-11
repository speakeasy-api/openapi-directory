package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPipelinesOutput
 * Represents the output of a <code>ListPipelines</code> action.
**/
public class ListPipelinesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPipelinesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelines")
    public PipelineSummary[] pipelines;
    public ListPipelinesOutput withPipelines(PipelineSummary[] pipelines) {
        this.pipelines = pipelines;
        return this;
    }
}