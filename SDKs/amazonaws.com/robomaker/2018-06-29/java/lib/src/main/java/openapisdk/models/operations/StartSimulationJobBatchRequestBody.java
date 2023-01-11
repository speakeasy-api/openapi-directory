package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartSimulationJobBatchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchPolicy")
    public StartSimulationJobBatchRequestBodyBatchPolicy batchPolicy;
    public StartSimulationJobBatchRequestBody withBatchPolicy(StartSimulationJobBatchRequestBodyBatchPolicy batchPolicy) {
        this.batchPolicy = batchPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public StartSimulationJobBatchRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("createSimulationJobRequests")
    public openapisdk.models.shared.SimulationJobRequest[] createSimulationJobRequests;
    public StartSimulationJobBatchRequestBody withCreateSimulationJobRequests(openapisdk.models.shared.SimulationJobRequest[] createSimulationJobRequests) {
        this.createSimulationJobRequests = createSimulationJobRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StartSimulationJobBatchRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}