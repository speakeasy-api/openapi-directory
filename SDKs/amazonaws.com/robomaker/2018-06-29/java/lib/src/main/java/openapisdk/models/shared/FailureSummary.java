package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailureSummary
 * Information about worlds that failed.
**/
public class FailureSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public WorldFailure[] failures;
    public FailureSummary withFailures(WorldFailure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFailureCount")
    public Long totalFailureCount;
    public FailureSummary withTotalFailureCount(Long totalFailureCount) {
        this.totalFailureCount = totalFailureCount;
        return this;
    }
}