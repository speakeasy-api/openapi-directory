package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetCognitoEventsRequestBody {
    @JsonProperty("Events")
    public java.util.Map<String, String> events;
    public SetCognitoEventsRequestBody withEvents(java.util.Map<String, String> events) {
        this.events = events;
        return this;
    }
}