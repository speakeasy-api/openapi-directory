package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateJourneyResponse {
    @JsonProperty("JourneyResponse")
    public JourneyResponse journeyResponse;
    public UpdateJourneyResponse withJourneyResponse(JourneyResponse journeyResponse) {
        this.journeyResponse = journeyResponse;
        return this;
    }
}