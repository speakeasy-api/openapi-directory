package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteJourneyResponse {
    @JsonProperty("JourneyResponse")
    public JourneyResponse journeyResponse;
    public DeleteJourneyResponse withJourneyResponse(JourneyResponse journeyResponse) {
        this.journeyResponse = journeyResponse;
        return this;
    }
}