package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttackVolume
 * Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.
**/
public class AttackVolume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BitsPerSecond")
    public AttackVolumeStatistics bitsPerSecond;
    public AttackVolume withBitsPerSecond(AttackVolumeStatistics bitsPerSecond) {
        this.bitsPerSecond = bitsPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PacketsPerSecond")
    public AttackVolumeStatistics packetsPerSecond;
    public AttackVolume withPacketsPerSecond(AttackVolumeStatistics packetsPerSecond) {
        this.packetsPerSecond = packetsPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestsPerSecond")
    public AttackVolumeStatistics requestsPerSecond;
    public AttackVolume withRequestsPerSecond(AttackVolumeStatistics requestsPerSecond) {
        this.requestsPerSecond = requestsPerSecond;
        return this;
    }
}