package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamSeasonStat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public TeamSeasonStat withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public TeamSeasonStat withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statName")
    public String statName;
    public TeamSeasonStat withStatName(String statName) {
        this.statName = statName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statValue")
    public Long statValue;
    public TeamSeasonStat withStatValue(Long statValue) {
        this.statValue = statValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public TeamSeasonStat withTeam(String team) {
        this.team = team;
        return this;
    }
}