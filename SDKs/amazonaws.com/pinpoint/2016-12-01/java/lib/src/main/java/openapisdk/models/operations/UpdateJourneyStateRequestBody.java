package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateJourneyStateRequestBody {
    @JsonProperty("JourneyStateRequest")
    public UpdateJourneyStateRequestBodyJourneyStateRequest journeyStateRequest;
    public UpdateJourneyStateRequestBody withJourneyStateRequest(UpdateJourneyStateRequestBodyJourneyStateRequest journeyStateRequest) {
        this.journeyStateRequest = journeyStateRequest;
        return this;
    }
}