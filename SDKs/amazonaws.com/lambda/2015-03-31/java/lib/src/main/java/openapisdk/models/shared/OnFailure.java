package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnFailure
 * A destination for events that failed processing.
**/
public class OnFailure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Destination")
    public String destination;
    public OnFailure withDestination(String destination) {
        this.destination = destination;
        return this;
    }
}