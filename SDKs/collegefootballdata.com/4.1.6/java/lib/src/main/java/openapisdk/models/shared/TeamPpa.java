package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamPpa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public TeamPpa withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defense")
    public TeamPpaDefense defense;
    public TeamPpa withDefense(TeamPpaDefense defense) {
        this.defense = defense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offense")
    public TeamPpaOffense offense;
    public TeamPpa withOffense(TeamPpaOffense offense) {
        this.offense = offense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public TeamPpa withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public TeamPpa withTeam(String team) {
        this.team = team;
        return this;
    }
}