package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSessionsOfAuthorUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessions")
    public ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions[] sessions;
    public ListSessionsOfAuthorUsingPost200ApplicationJsonData withSessions(ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions[] sessions) {
        this.sessions = sessions;
        return this;
    }
}