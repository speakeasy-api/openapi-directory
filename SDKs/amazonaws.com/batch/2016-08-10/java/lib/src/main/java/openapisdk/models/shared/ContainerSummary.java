package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerSummary
 * An object representing summary details of a container within a job.
**/
public class ContainerSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCode")
    public Long exitCode;
    public ContainerSummary withExitCode(Long exitCode) {
        this.exitCode = exitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ContainerSummary withReason(String reason) {
        this.reason = reason;
        return this;
    }
}