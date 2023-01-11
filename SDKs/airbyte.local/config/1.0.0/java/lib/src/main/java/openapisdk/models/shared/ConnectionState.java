package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionState {
    @JsonProperty("connectionId")
    public String connectionId;
    public ConnectionState withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public java.util.Map<String, Object> state;
    public ConnectionState withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
}