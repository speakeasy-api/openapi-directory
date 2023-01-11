package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PregameWp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awayTeam")
    public String awayTeam;
    public PregameWp withAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gameId")
    public Long gameId;
    public PregameWp withGameId(Long gameId) {
        this.gameId = gameId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeTeam")
    public String homeTeam;
    public PregameWp withHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeWinProb")
    public Double homeWinProb;
    public PregameWp withHomeWinProb(Double homeWinProb) {
        this.homeWinProb = homeWinProb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public PregameWp withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seasonType")
    public String seasonType;
    public PregameWp withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spread")
    public Double spread;
    public PregameWp withSpread(Double spread) {
        this.spread = spread;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public PregameWp withWeek(Long week) {
        this.week = week;
        return this;
    }
}