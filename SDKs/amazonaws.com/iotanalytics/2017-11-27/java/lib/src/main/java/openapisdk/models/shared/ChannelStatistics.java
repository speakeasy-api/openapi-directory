package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelStatistics
 * Statistics information about the channel.
**/
public class ChannelStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public EstimatedResourceSize size;
    public ChannelStatistics withSize(EstimatedResourceSize size) {
        this.size = size;
        return this;
    }
}