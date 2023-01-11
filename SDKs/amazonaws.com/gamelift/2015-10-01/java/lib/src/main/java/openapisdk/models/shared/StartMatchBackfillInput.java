package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartMatchBackfillInput
 * Represents the input for a request operation.
**/
public class StartMatchBackfillInput {
    @JsonProperty("ConfigurationName")
    public String configurationName;
    public StartMatchBackfillInput withConfigurationName(String configurationName) {
        this.configurationName = configurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameSessionArn")
    public String gameSessionArn;
    public StartMatchBackfillInput withGameSessionArn(String gameSessionArn) {
        this.gameSessionArn = gameSessionArn;
        return this;
    }
    @JsonProperty("Players")
    public Player[] players;
    public StartMatchBackfillInput withPlayers(Player[] players) {
        this.players = players;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TicketId")
    public String ticketId;
    public StartMatchBackfillInput withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
}