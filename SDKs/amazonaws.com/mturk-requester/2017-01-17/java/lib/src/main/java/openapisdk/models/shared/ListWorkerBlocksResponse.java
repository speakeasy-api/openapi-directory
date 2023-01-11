package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkerBlocksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListWorkerBlocksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumResults")
    public Long numResults;
    public ListWorkerBlocksResponse withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerBlocks")
    public WorkerBlock[] workerBlocks;
    public ListWorkerBlocksResponse withWorkerBlocks(WorkerBlock[] workerBlocks) {
        this.workerBlocks = workerBlocks;
        return this;
    }
}