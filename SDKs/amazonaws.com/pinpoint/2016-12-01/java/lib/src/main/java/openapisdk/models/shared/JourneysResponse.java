package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JourneysResponse
 * Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
**/
public class JourneysResponse {
    @JsonProperty("Item")
    public JourneyResponse[] item;
    public JourneysResponse withItem(JourneyResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public JourneysResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}