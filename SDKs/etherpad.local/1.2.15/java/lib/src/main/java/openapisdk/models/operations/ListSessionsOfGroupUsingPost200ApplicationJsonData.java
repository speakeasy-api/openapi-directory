package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSessionsOfGroupUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessions")
    public ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions[] sessions;
    public ListSessionsOfGroupUsingPost200ApplicationJsonData withSessions(ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions[] sessions) {
        this.sessions = sessions;
        return this;
    }
}