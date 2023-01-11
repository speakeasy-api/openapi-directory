package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CanaryLastRun
 * This structure contains information about the most recent run of a single canary.
**/
public class CanaryLastRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CanaryName")
    public String canaryName;
    public CanaryLastRun withCanaryName(String canaryName) {
        this.canaryName = canaryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastRun")
    public CanaryRun lastRun;
    public CanaryLastRun withLastRun(CanaryRun lastRun) {
        this.lastRun = lastRun;
        return this;
    }
}