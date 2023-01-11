package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorldFailure
 * Information about a failed world.
**/
public class WorldFailure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public WorldGenerationJobErrorCodeEnum failureCode;
    public WorldFailure withFailureCode(WorldGenerationJobErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCount")
    public Long failureCount;
    public WorldFailure withFailureCount(Long failureCount) {
        this.failureCount = failureCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleFailureReason")
    public String sampleFailureReason;
    public WorldFailure withSampleFailureReason(String sampleFailureReason) {
        this.sampleFailureReason = sampleFailureReason;
        return this;
    }
}