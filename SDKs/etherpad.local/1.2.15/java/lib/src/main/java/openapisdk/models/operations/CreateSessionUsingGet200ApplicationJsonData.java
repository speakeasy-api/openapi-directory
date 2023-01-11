package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSessionUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionID")
    public String sessionID;
    public CreateSessionUsingGet200ApplicationJsonData withSessionId(String sessionID) {
        this.sessionID = sessionID;
        return this;
    }
}