package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoxScoreTeamsSuccessRates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall")
    public BoxScoreTeamsSuccessRatesOverall overall;
    public BoxScoreTeamsSuccessRates withOverall(BoxScoreTeamsSuccessRatesOverall overall) {
        this.overall = overall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingDowns")
    public BoxScoreTeamsSuccessRatesPassingDowns passingDowns;
    public BoxScoreTeamsSuccessRates withPassingDowns(BoxScoreTeamsSuccessRatesPassingDowns passingDowns) {
        this.passingDowns = passingDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardDowns")
    public BoxScoreTeamsSuccessRatesStandardDowns standardDowns;
    public BoxScoreTeamsSuccessRates withStandardDowns(BoxScoreTeamsSuccessRatesStandardDowns standardDowns) {
        this.standardDowns = standardDowns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public BoxScoreTeamsSuccessRates withTeam(String team) {
        this.team = team;
        return this;
    }
}