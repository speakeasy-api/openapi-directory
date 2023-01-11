package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CpuOptions
 * The options for how a device's CPU is configured.
**/
public class CpuOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coreCount")
    public Long coreCount;
    public CpuOptions withCoreCount(Long coreCount) {
        this.coreCount = coreCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threadsPerCore")
    public Long threadsPerCore;
    public CpuOptions withThreadsPerCore(Long threadsPerCore) {
        this.threadsPerCore = threadsPerCore;
        return this;
    }
}