package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RecencyDimension
 * Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
**/
public class RecencyDimension {
    @JsonProperty("Duration")
    public DurationEnum duration;
    public RecencyDimension withDuration(DurationEnum duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("RecencyType")
    public RecencyTypeEnum recencyType;
    public RecencyDimension withRecencyType(RecencyTypeEnum recencyType) {
        this.recencyType = recencyType;
        return this;
    }
}