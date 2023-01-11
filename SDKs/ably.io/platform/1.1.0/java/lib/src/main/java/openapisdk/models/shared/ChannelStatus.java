package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelStatus
 * A ChannelStatus instance.
**/
public class ChannelStatus {
    @JsonProperty("isActive")
    public Boolean isActive;
    public ChannelStatus withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occupancy")
    public Occupancy occupancy;
    public ChannelStatus withOccupancy(Occupancy occupancy) {
        this.occupancy = occupancy;
        return this;
    }
}