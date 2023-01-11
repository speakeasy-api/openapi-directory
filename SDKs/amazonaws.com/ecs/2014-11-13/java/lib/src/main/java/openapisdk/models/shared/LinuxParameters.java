package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinuxParameters
 * Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>.
**/
public class LinuxParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public KernelCapabilities capabilities;
    public LinuxParameters withCapabilities(KernelCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public Device[] devices;
    public LinuxParameters withDevices(Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initProcessEnabled")
    public Boolean initProcessEnabled;
    public LinuxParameters withInitProcessEnabled(Boolean initProcessEnabled) {
        this.initProcessEnabled = initProcessEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSwap")
    public Long maxSwap;
    public LinuxParameters withMaxSwap(Long maxSwap) {
        this.maxSwap = maxSwap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedMemorySize")
    public Long sharedMemorySize;
    public LinuxParameters withSharedMemorySize(Long sharedMemorySize) {
        this.sharedMemorySize = sharedMemorySize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("swappiness")
    public Long swappiness;
    public LinuxParameters withSwappiness(Long swappiness) {
        this.swappiness = swappiness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tmpfs")
    public Tmpfs[] tmpfs;
    public LinuxParameters withTmpfs(Tmpfs[] tmpfs) {
        this.tmpfs = tmpfs;
        return this;
    }
}