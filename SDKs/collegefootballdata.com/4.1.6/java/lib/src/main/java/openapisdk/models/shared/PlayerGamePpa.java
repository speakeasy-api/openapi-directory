package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerGamePpa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averagePPA")
    public PlayerGamePpaAveragePpa averagePPA;
    public PlayerGamePpa withAveragePpa(PlayerGamePpaAveragePpa averagePPA) {
        this.averagePPA = averagePPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlayerGamePpa withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opponent")
    public String opponent;
    public PlayerGamePpa withOpponent(String opponent) {
        this.opponent = opponent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public String position;
    public PlayerGamePpa withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public PlayerGamePpa withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public PlayerGamePpa withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public PlayerGamePpa withWeek(Long week) {
        this.week = week;
        return this;
    }
}