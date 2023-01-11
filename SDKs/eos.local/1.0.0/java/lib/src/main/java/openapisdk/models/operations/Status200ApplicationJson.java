package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Status200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connecting")
    public Boolean connecting;
    public Status200ApplicationJson withConnecting(Boolean connecting) {
        this.connecting = connecting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_handshake")
    public Status200ApplicationJsonLastHandshake lastHandshake;
    public Status200ApplicationJson withLastHandshake(Status200ApplicationJsonLastHandshake lastHandshake) {
        this.lastHandshake = lastHandshake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peer")
    public String peer;
    public Status200ApplicationJson withPeer(String peer) {
        this.peer = peer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncing")
    public Boolean syncing;
    public Status200ApplicationJson withSyncing(Boolean syncing) {
        this.syncing = syncing;
        return this;
    }
}