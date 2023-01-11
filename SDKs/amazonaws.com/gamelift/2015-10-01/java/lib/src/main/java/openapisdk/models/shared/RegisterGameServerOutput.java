package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterGameServerOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServer")
    public GameServer gameServer;
    public RegisterGameServerOutput withGameServer(GameServer gameServer) {
        this.gameServer = gameServer;
        return this;
    }
}