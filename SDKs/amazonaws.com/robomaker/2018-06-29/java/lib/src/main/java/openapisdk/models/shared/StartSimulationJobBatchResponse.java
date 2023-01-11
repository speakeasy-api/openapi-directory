package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartSimulationJobBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public StartSimulationJobBatchResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchPolicy")
    public BatchPolicy batchPolicy;
    public StartSimulationJobBatchResponse withBatchPolicy(BatchPolicy batchPolicy) {
        this.batchPolicy = batchPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public StartSimulationJobBatchResponse withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public StartSimulationJobBatchResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdRequests")
    public SimulationJobSummary[] createdRequests;
    public StartSimulationJobBatchResponse withCreatedRequests(SimulationJobSummary[] createdRequests) {
        this.createdRequests = createdRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedRequests")
    public FailedCreateSimulationJobRequest[] failedRequests;
    public StartSimulationJobBatchResponse withFailedRequests(FailedCreateSimulationJobRequest[] failedRequests) {
        this.failedRequests = failedRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public SimulationJobBatchErrorCodeEnum failureCode;
    public StartSimulationJobBatchResponse withFailureCode(SimulationJobBatchErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public StartSimulationJobBatchResponse withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingRequests")
    public SimulationJobRequest[] pendingRequests;
    public StartSimulationJobBatchResponse withPendingRequests(SimulationJobRequest[] pendingRequests) {
        this.pendingRequests = pendingRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SimulationJobBatchStatusEnum status;
    public StartSimulationJobBatchResponse withStatus(SimulationJobBatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StartSimulationJobBatchResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}