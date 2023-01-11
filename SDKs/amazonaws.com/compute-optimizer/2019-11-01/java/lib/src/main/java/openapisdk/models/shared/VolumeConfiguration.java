package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeConfiguration
 * Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.
**/
public class VolumeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeBaselineIOPS")
    public Long volumeBaselineIOPS;
    public VolumeConfiguration withVolumeBaselineIops(Long volumeBaselineIOPS) {
        this.volumeBaselineIOPS = volumeBaselineIOPS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeBaselineThroughput")
    public Long volumeBaselineThroughput;
    public VolumeConfiguration withVolumeBaselineThroughput(Long volumeBaselineThroughput) {
        this.volumeBaselineThroughput = volumeBaselineThroughput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeBurstIOPS")
    public Long volumeBurstIOPS;
    public VolumeConfiguration withVolumeBurstIops(Long volumeBurstIOPS) {
        this.volumeBurstIOPS = volumeBurstIOPS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeBurstThroughput")
    public Long volumeBurstThroughput;
    public VolumeConfiguration withVolumeBurstThroughput(Long volumeBurstThroughput) {
        this.volumeBurstThroughput = volumeBurstThroughput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeSize")
    public Long volumeSize;
    public VolumeConfiguration withVolumeSize(Long volumeSize) {
        this.volumeSize = volumeSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeType")
    public String volumeType;
    public VolumeConfiguration withVolumeType(String volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}