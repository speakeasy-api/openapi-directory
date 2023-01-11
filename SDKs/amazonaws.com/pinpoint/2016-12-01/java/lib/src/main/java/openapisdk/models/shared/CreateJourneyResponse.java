package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateJourneyResponse {
    @JsonProperty("JourneyResponse")
    public JourneyResponse journeyResponse;
    public CreateJourneyResponse withJourneyResponse(JourneyResponse journeyResponse) {
        this.journeyResponse = journeyResponse;
        return this;
    }
}