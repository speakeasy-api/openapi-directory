package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoxScoreTeamsHavoc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("db")
    public Double db;
    public BoxScoreTeamsHavoc withDb(Double db) {
        this.db = db;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frontSeven")
    public Double frontSeven;
    public BoxScoreTeamsHavoc withFrontSeven(Double frontSeven) {
        this.frontSeven = frontSeven;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public BoxScoreTeamsHavoc withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public BoxScoreTeamsHavoc withTotal(Double total) {
        this.total = total;
        return this;
    }
}