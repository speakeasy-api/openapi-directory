package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoxScoreTeamsCumulativePpa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall")
    public BoxScoreTeamsCumulativePpaOverall overall;
    public BoxScoreTeamsCumulativePpa withOverall(BoxScoreTeamsCumulativePpaOverall overall) {
        this.overall = overall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passing")
    public BoxScoreTeamsCumulativePpaPassing passing;
    public BoxScoreTeamsCumulativePpa withPassing(BoxScoreTeamsCumulativePpaPassing passing) {
        this.passing = passing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plays")
    public Double plays;
    public BoxScoreTeamsCumulativePpa withPlays(Double plays) {
        this.plays = plays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public BoxScoreTeamsCumulativePpaRushing rushing;
    public BoxScoreTeamsCumulativePpa withRushing(BoxScoreTeamsCumulativePpaRushing rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public BoxScoreTeamsCumulativePpa withTeam(String team) {
        this.team = team;
        return this;
    }
}