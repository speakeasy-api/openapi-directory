package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJourneyResponse {
    @JsonProperty("JourneyResponse")
    public JourneyResponse journeyResponse;
    public GetJourneyResponse withJourneyResponse(JourneyResponse journeyResponse) {
        this.journeyResponse = journeyResponse;
        return this;
    }
}