package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateJourneyStateRequestBodyJourneyStateRequest
 * Changes the status of a journey.
**/
public class UpdateJourneyStateRequestBodyJourneyStateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public openapisdk.models.shared.StateEnum state;
    public UpdateJourneyStateRequestBodyJourneyStateRequest withState(openapisdk.models.shared.StateEnum state) {
        this.state = state;
        return this;
    }
}