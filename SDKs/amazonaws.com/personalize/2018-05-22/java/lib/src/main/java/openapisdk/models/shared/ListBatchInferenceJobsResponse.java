package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBatchInferenceJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchInferenceJobs")
    public BatchInferenceJobSummary[] batchInferenceJobs;
    public ListBatchInferenceJobsResponse withBatchInferenceJobs(BatchInferenceJobSummary[] batchInferenceJobs) {
        this.batchInferenceJobs = batchInferenceJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBatchInferenceJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}