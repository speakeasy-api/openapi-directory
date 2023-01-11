package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListJourneysResponse {
    @JsonProperty("JourneysResponse")
    public JourneysResponse journeysResponse;
    public ListJourneysResponse withJourneysResponse(JourneysResponse journeysResponse) {
        this.journeysResponse = journeysResponse;
        return this;
    }
}