package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamGameTeams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public TeamGameTeams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeAway")
    public Boolean homeAway;
    public TeamGameTeams withHomeAway(Boolean homeAway) {
        this.homeAway = homeAway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public Long points;
    public TeamGameTeams withPoints(Long points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public String school;
    public TeamGameTeams withSchool(String school) {
        this.school = school;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public TeamGameTeamsStats[] stats;
    public TeamGameTeams withStats(TeamGameTeamsStats[] stats) {
        this.stats = stats;
        return this;
    }
}