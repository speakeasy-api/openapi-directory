package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicationConfigurationReplicatedDisk
 * Replication Configuration replicated disk.
**/
public class ReplicationConfigurationReplicatedDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public ReplicationConfigurationReplicatedDisk withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iops")
    public Long iops;
    public ReplicationConfigurationReplicatedDisk withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBootDisk")
    public Boolean isBootDisk;
    public ReplicationConfigurationReplicatedDisk withIsBootDisk(Boolean isBootDisk) {
        this.isBootDisk = isBootDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stagingDiskType")
    public ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum stagingDiskType;
    public ReplicationConfigurationReplicatedDisk withStagingDiskType(ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum stagingDiskType) {
        this.stagingDiskType = stagingDiskType;
        return this;
    }
}