package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInferenceExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceExecutionSummaries")
    public InferenceExecutionSummary[] inferenceExecutionSummaries;
    public ListInferenceExecutionsResponse withInferenceExecutionSummaries(InferenceExecutionSummary[] inferenceExecutionSummaries) {
        this.inferenceExecutionSummaries = inferenceExecutionSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListInferenceExecutionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}