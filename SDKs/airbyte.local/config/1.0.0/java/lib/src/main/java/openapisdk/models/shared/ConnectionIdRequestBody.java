package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConnectionIdRequestBody {
    @JsonProperty("connectionId")
    public String connectionId;
    public ConnectionIdRequestBody withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}