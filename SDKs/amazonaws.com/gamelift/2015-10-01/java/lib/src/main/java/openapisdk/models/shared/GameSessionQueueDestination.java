package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GameSessionQueueDestination
 * <p>A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations. </p> <p>Destinations are part of a <a>GameSessionQueue</a>.</p>
**/
public class GameSessionQueueDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationArn")
    public String destinationArn;
    public GameSessionQueueDestination withDestinationArn(String destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
}