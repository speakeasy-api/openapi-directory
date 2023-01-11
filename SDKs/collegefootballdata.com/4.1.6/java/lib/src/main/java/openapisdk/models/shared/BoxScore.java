package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoxScore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("players")
    public BoxScorePlayers players;
    public BoxScore withPlayers(BoxScorePlayers players) {
        this.players = players;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams")
    public BoxScoreTeams teams;
    public BoxScore withTeams(BoxScoreTeams teams) {
        this.teams = teams;
        return this;
    }
}