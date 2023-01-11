package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSessionsOfGroupUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessions")
    public ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions[] sessions;
    public ListSessionsOfGroupUsingGet200ApplicationJsonData withSessions(ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions[] sessions) {
        this.sessions = sessions;
        return this;
    }
}