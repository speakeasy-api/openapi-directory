package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GamePpaOffense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstDown")
    public Double firstDown;
    public GamePpaOffense withFirstDown(Double firstDown) {
        this.firstDown = firstDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall")
    public Double overall;
    public GamePpaOffense withOverall(Double overall) {
        this.overall = overall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passing")
    public Double passing;
    public GamePpaOffense withPassing(Double passing) {
        this.passing = passing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public Double rushing;
    public GamePpaOffense withRushing(Double rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondDown")
    public Double secondDown;
    public GamePpaOffense withSecondDown(Double secondDown) {
        this.secondDown = secondDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdDown")
    public Double thirdDown;
    public GamePpaOffense withThirdDown(Double thirdDown) {
        this.thirdDown = thirdDown;
        return this;
    }
}