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
 * FailedCreateSimulationJobRequest
 * Information about a failed create simulation job request.
**/
public class FailedCreateSimulationJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("failedAt")
    public OffsetDateTime failedAt;
    public FailedCreateSimulationJobRequest withFailedAt(OffsetDateTime failedAt) {
        this.failedAt = failedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public SimulationJobErrorCodeEnum failureCode;
    public FailedCreateSimulationJobRequest withFailureCode(SimulationJobErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public FailedCreateSimulationJobRequest withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public SimulationJobRequest request;
    public FailedCreateSimulationJobRequest withRequest(SimulationJobRequest request) {
        this.request = request;
        return this;
    }
}