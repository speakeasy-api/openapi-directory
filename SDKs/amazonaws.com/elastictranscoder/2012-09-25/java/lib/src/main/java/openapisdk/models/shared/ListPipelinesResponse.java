package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPipelinesResponse
 * A list of the pipelines associated with the current AWS account.
**/
public class ListPipelinesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListPipelinesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pipelines")
    public Pipeline[] pipelines;
    public ListPipelinesResponse withPipelines(Pipeline[] pipelines) {
        this.pipelines = pipelines;
        return this;
    }
}