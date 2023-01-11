package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamPpaOffenseCumulative {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passing")
    public Double passing;
    public TeamPpaOffenseCumulative withPassing(Double passing) {
        this.passing = passing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public Double rushing;
    public TeamPpaOffenseCumulative withRushing(Double rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public TeamPpaOffenseCumulative withTotal(Double total) {
        this.total = total;
        return this;
    }
}