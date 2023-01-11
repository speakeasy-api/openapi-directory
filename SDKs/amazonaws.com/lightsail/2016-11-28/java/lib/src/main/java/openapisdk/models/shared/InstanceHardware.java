package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceHardware
 * Describes the hardware for the instance.
**/
public class InstanceHardware {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuCount")
    public Long cpuCount;
    public InstanceHardware withCpuCount(Long cpuCount) {
        this.cpuCount = cpuCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disks")
    public Disk[] disks;
    public InstanceHardware withDisks(Disk[] disks) {
        this.disks = disks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramSizeInGb")
    public Float ramSizeInGb;
    public InstanceHardware withRamSizeInGb(Float ramSizeInGb) {
        this.ramSizeInGb = ramSizeInGb;
        return this;
    }
}