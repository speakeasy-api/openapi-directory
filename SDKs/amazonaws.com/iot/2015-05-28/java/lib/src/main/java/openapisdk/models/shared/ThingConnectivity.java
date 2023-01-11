package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThingConnectivity
 * The connectivity status of the thing.
**/
public class ThingConnectivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected")
    public Boolean connected;
    public ThingConnectivity withConnected(Boolean connected) {
        this.connected = connected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disconnectReason")
    public String disconnectReason;
    public ThingConnectivity withDisconnectReason(String disconnectReason) {
        this.disconnectReason = disconnectReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Long timestamp;
    public ThingConnectivity withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}