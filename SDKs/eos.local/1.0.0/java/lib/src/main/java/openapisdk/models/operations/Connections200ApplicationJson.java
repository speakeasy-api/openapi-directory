package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Connections200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connecting")
    public Boolean connecting;
    public Connections200ApplicationJson withConnecting(Boolean connecting) {
        this.connecting = connecting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_handshake")
    public Connections200ApplicationJsonLastHandshake lastHandshake;
    public Connections200ApplicationJson withLastHandshake(Connections200ApplicationJsonLastHandshake lastHandshake) {
        this.lastHandshake = lastHandshake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peer")
    public String peer;
    public Connections200ApplicationJson withPeer(String peer) {
        this.peer = peer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncing")
    public Boolean syncing;
    public Connections200ApplicationJson withSyncing(Boolean syncing) {
        this.syncing = syncing;
        return this;
    }
}