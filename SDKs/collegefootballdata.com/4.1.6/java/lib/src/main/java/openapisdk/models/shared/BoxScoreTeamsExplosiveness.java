package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoxScoreTeamsExplosiveness {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall")
    public BoxScoreTeamsExplosivenessOverall overall;
    public BoxScoreTeamsExplosiveness withOverall(BoxScoreTeamsExplosivenessOverall overall) {
        this.overall = overall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public BoxScoreTeamsExplosiveness withTeam(String team) {
        this.team = team;
        return this;
    }
}