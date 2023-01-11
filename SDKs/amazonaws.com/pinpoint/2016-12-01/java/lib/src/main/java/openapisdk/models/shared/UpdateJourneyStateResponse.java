package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateJourneyStateResponse {
    @JsonProperty("JourneyResponse")
    public JourneyResponse journeyResponse;
    public UpdateJourneyStateResponse withJourneyResponse(JourneyResponse journeyResponse) {
        this.journeyResponse = journeyResponse;
        return this;
    }
}