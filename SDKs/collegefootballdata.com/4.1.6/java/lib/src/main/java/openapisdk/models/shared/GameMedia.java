package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GameMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awayConference")
    public String awayConference;
    public GameMedia withAwayConference(String awayConference) {
        this.awayConference = awayConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awayTeam")
    public String awayTeam;
    public GameMedia withAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeConference")
    public String homeConference;
    public GameMedia withHomeConference(String homeConference) {
        this.homeConference = homeConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeTeam")
    public String homeTeam;
    public GameMedia withHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GameMedia withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isStartTimeTBD")
    public Boolean isStartTimeTBD;
    public GameMedia withIsStartTimeTbd(Boolean isStartTimeTBD) {
        this.isStartTimeTBD = isStartTimeTBD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaType")
    public String mediaType;
    public GameMedia withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet")
    public String outlet;
    public GameMedia withOutlet(String outlet) {
        this.outlet = outlet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public GameMedia withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seasonType")
    public String seasonType;
    public GameMedia withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GameMedia withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public GameMedia withWeek(Long week) {
        this.week = week;
        return this;
    }
}