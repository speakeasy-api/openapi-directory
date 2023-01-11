package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListActionExecutionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public ActionExecutionFilter filter;
    public ListActionExecutionsInput withFilter(ActionExecutionFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListActionExecutionsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListActionExecutionsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("pipelineName")
    public String pipelineName;
    public ListActionExecutionsInput withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
}