package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GameLines {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awayConference")
    public String awayConference;
    public GameLines withAwayConference(String awayConference) {
        this.awayConference = awayConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awayScore")
    public Long awayScore;
    public GameLines withAwayScore(Long awayScore) {
        this.awayScore = awayScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awayTeam")
    public String awayTeam;
    public GameLines withAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeConference")
    public String homeConference;
    public GameLines withHomeConference(String homeConference) {
        this.homeConference = homeConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeScore")
    public Long homeScore;
    public GameLines withHomeScore(Long homeScore) {
        this.homeScore = homeScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeTeam")
    public String homeTeam;
    public GameLines withHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GameLines withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lines")
    public GameLinesLines[] lines;
    public GameLines withLines(GameLinesLines[] lines) {
        this.lines = lines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public GameLines withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seasonType")
    public String seasonType;
    public GameLines withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public GameLines withWeek(Long week) {
        this.week = week;
        return this;
    }
}