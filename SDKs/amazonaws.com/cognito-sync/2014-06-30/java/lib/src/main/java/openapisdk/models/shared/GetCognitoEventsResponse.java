package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCognitoEventsResponse
 * The response from the GetCognitoEvents request
**/
public class GetCognitoEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public java.util.Map<String, String> events;
    public GetCognitoEventsResponse withEvents(java.util.Map<String, String> events) {
        this.events = events;
        return this;
    }
}