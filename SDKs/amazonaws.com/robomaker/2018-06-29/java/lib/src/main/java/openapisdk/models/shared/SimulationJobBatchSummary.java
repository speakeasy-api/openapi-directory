package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SimulationJobBatchSummary
 * Information about a simulation job batch.
**/
public class SimulationJobBatchSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public SimulationJobBatchSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public SimulationJobBatchSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdRequestCount")
    public Long createdRequestCount;
    public SimulationJobBatchSummary withCreatedRequestCount(Long createdRequestCount) {
        this.createdRequestCount = createdRequestCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedRequestCount")
    public Long failedRequestCount;
    public SimulationJobBatchSummary withFailedRequestCount(Long failedRequestCount) {
        this.failedRequestCount = failedRequestCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public SimulationJobBatchSummary withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingRequestCount")
    public Long pendingRequestCount;
    public SimulationJobBatchSummary withPendingRequestCount(Long pendingRequestCount) {
        this.pendingRequestCount = pendingRequestCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SimulationJobBatchStatusEnum status;
    public SimulationJobBatchSummary withStatus(SimulationJobBatchStatusEnum status) {
        this.status = status;
        return this;
    }
}