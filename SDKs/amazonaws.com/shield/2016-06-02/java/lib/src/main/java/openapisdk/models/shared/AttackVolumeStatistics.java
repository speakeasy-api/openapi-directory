package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AttackVolumeStatistics
 * Statistics objects for the various data types in <a>AttackVolume</a>. 
**/
public class AttackVolumeStatistics {
    @JsonProperty("Max")
    public Double max;
    public AttackVolumeStatistics withMax(Double max) {
        this.max = max;
        return this;
    }
}