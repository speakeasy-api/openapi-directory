package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamRecordHomeGames {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("games")
    public Long games;
    public TeamRecordHomeGames withGames(Long games) {
        this.games = games;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("losses")
    public Long losses;
    public TeamRecordHomeGames withLosses(Long losses) {
        this.losses = losses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ties")
    public Long ties;
    public TeamRecordHomeGames withTies(Long ties) {
        this.ties = ties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wins")
    public Long wins;
    public TeamRecordHomeGames withWins(Long wins) {
        this.wins = wins;
        return this;
    }
}