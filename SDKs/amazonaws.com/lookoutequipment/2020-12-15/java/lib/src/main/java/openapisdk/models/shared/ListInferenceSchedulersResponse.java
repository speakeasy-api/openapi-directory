package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInferenceSchedulersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceSchedulerSummaries")
    public InferenceSchedulerSummary[] inferenceSchedulerSummaries;
    public ListInferenceSchedulersResponse withInferenceSchedulerSummaries(InferenceSchedulerSummary[] inferenceSchedulerSummaries) {
        this.inferenceSchedulerSummaries = inferenceSchedulerSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListInferenceSchedulersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}