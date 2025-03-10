package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerSeasonStat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public PlayerSeasonStat withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public PlayerSeasonStat withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("player")
    public String player;
    public PlayerSeasonStat withPlayer(String player) {
        this.player = player;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerId")
    public Long playerId;
    public PlayerSeasonStat withPlayerId(Long playerId) {
        this.playerId = playerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public PlayerSeasonStat withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stat")
    public Double stat;
    public PlayerSeasonStat withStat(Double stat) {
        this.stat = stat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statType")
    public String statType;
    public PlayerSeasonStat withStatType(String statType) {
        this.statType = statType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public PlayerSeasonStat withTeam(String team) {
        this.team = team;
        return this;
    }
}