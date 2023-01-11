package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPipelineExecutionsInput
 * Represents the input of a <code>ListPipelineExecutions</code> action.
**/
public class ListPipelineExecutionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListPipelineExecutionsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPipelineExecutionsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("pipelineName")
    public String pipelineName;
    public ListPipelineExecutionsInput withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
}