package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnSuccess
 * A destination for events that were processed successfully.
**/
public class OnSuccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Destination")
    public String destination;
    public OnSuccess withDestination(String destination) {
        this.destination = destination;
        return this;
    }
}