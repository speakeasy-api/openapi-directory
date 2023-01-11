package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeConfiguration
 * Describes an Amazon EBS volume configuration.
**/
public class VolumeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public VolumeConfiguration withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Iops")
    public Long iops;
    public VolumeConfiguration withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @JsonProperty("MountPoint")
    public String mountPoint;
    public VolumeConfiguration withMountPoint(String mountPoint) {
        this.mountPoint = mountPoint;
        return this;
    }
    @JsonProperty("NumberOfDisks")
    public Long numberOfDisks;
    public VolumeConfiguration withNumberOfDisks(Long numberOfDisks) {
        this.numberOfDisks = numberOfDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RaidLevel")
    public Long raidLevel;
    public VolumeConfiguration withRaidLevel(Long raidLevel) {
        this.raidLevel = raidLevel;
        return this;
    }
    @JsonProperty("Size")
    public Long size;
    public VolumeConfiguration withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeType")
    public String volumeType;
    public VolumeConfiguration withVolumeType(String volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}