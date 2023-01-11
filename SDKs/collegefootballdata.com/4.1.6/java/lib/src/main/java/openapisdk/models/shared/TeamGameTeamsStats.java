package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamGameTeamsStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public TeamGameTeamsStats withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stat")
    public String stat;
    public TeamGameTeamsStats withStat(String stat) {
        this.stat = stat;
        return this;
    }
}