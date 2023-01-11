package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelationalDatabaseHardware
 * Describes the hardware of a database.
**/
public class RelationalDatabaseHardware {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuCount")
    public Long cpuCount;
    public RelationalDatabaseHardware withCpuCount(Long cpuCount) {
        this.cpuCount = cpuCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeInGb")
    public Long diskSizeInGb;
    public RelationalDatabaseHardware withDiskSizeInGb(Long diskSizeInGb) {
        this.diskSizeInGb = diskSizeInGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramSizeInGb")
    public Float ramSizeInGb;
    public RelationalDatabaseHardware withRamSizeInGb(Float ramSizeInGb) {
        this.ramSizeInGb = ramSizeInGb;
        return this;
    }
}