package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamPpaDefense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative")
    public TeamPpaDefenseCumulative cumulative;
    public TeamPpaDefense withCumulative(TeamPpaDefenseCumulative cumulative) {
        this.cumulative = cumulative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstDown")
    public Double firstDown;
    public TeamPpaDefense withFirstDown(Double firstDown) {
        this.firstDown = firstDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall")
    public Double overall;
    public TeamPpaDefense withOverall(Double overall) {
        this.overall = overall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passing")
    public Double passing;
    public TeamPpaDefense withPassing(Double passing) {
        this.passing = passing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public Double rushing;
    public TeamPpaDefense withRushing(Double rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondDown")
    public Double secondDown;
    public TeamPpaDefense withSecondDown(Double secondDown) {
        this.secondDown = secondDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdDown")
    public Double thirdDown;
    public TeamPpaDefense withThirdDown(Double thirdDown) {
        this.thirdDown = thirdDown;
        return this;
    }
}