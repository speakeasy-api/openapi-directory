package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Occupancy
 * An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
**/
public class Occupancy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presenceConnections")
    public Long presenceConnections;
    public Occupancy withPresenceConnections(Long presenceConnections) {
        this.presenceConnections = presenceConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presenceMembers")
    public Long presenceMembers;
    public Occupancy withPresenceMembers(Long presenceMembers) {
        this.presenceMembers = presenceMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presenceSubscribers")
    public Long presenceSubscribers;
    public Occupancy withPresenceSubscribers(Long presenceSubscribers) {
        this.presenceSubscribers = presenceSubscribers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishers")
    public Long publishers;
    public Occupancy withPublishers(Long publishers) {
        this.publishers = publishers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribers")
    public Long subscribers;
    public Occupancy withSubscribers(Long subscribers) {
        this.subscribers = subscribers;
        return this;
    }
}