package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSessionsOfAuthorUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessions")
    public ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions[] sessions;
    public ListSessionsOfAuthorUsingGet200ApplicationJsonData withSessions(ListSessionsOfAuthorUsingGet200ApplicationJsonDataSessions[] sessions) {
        this.sessions = sessions;
        return this;
    }
}