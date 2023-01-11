package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamPpaOffense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative")
    public TeamPpaOffenseCumulative cumulative;
    public TeamPpaOffense withCumulative(TeamPpaOffenseCumulative cumulative) {
        this.cumulative = cumulative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstDown")
    public Double firstDown;
    public TeamPpaOffense withFirstDown(Double firstDown) {
        this.firstDown = firstDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall")
    public Double overall;
    public TeamPpaOffense withOverall(Double overall) {
        this.overall = overall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passing")
    public Double passing;
    public TeamPpaOffense withPassing(Double passing) {
        this.passing = passing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public Double rushing;
    public TeamPpaOffense withRushing(Double rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondDown")
    public Double secondDown;
    public TeamPpaOffense withSecondDown(Double secondDown) {
        this.secondDown = secondDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdDown")
    public Double thirdDown;
    public TeamPpaOffense withThirdDown(Double thirdDown) {
        this.thirdDown = thirdDown;
        return this;
    }
}