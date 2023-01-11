package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GamePpa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public GamePpa withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defense")
    public GamePpaDefense defense;
    public GamePpa withDefense(GamePpaDefense defense) {
        this.defense = defense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GamePpa withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offense")
    public GamePpaOffense offense;
    public GamePpa withOffense(GamePpaOffense offense) {
        this.offense = offense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opponnent")
    public String opponnent;
    public GamePpa withOpponnent(String opponnent) {
        this.opponnent = opponnent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public GamePpa withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public GamePpa withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public GamePpa withWeek(Long week) {
        this.week = week;
        return this;
    }
}