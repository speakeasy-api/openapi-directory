package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGameServerOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServer")
    public GameServer gameServer;
    public UpdateGameServerOutput withGameServer(GameServer gameServer) {
        this.gameServer = gameServer;
        return this;
    }
}