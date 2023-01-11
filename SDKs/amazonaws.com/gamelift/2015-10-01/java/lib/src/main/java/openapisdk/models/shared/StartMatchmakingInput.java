package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartMatchmakingInput
 * Represents the input for a request operation.
**/
public class StartMatchmakingInput {
    @JsonProperty("ConfigurationName")
    public String configurationName;
    public StartMatchmakingInput withConfigurationName(String configurationName) {
        this.configurationName = configurationName;
        return this;
    }
    @JsonProperty("Players")
    public Player[] players;
    public StartMatchmakingInput withPlayers(Player[] players) {
        this.players = players;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TicketId")
    public String ticketId;
    public StartMatchmakingInput withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
}