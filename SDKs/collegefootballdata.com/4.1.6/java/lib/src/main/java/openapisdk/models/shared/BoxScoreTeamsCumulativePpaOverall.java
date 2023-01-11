package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoxScoreTeamsCumulativePpaOverall {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quarter1")
    public Double quarter1;
    public BoxScoreTeamsCumulativePpaOverall withQuarter1(Double quarter1) {
        this.quarter1 = quarter1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quarter2")
    public Double quarter2;
    public BoxScoreTeamsCumulativePpaOverall withQuarter2(Double quarter2) {
        this.quarter2 = quarter2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quarter3")
    public Double quarter3;
    public BoxScoreTeamsCumulativePpaOverall withQuarter3(Double quarter3) {
        this.quarter3 = quarter3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quarter4")
    public Double quarter4;
    public BoxScoreTeamsCumulativePpaOverall withQuarter4(Double quarter4) {
        this.quarter4 = quarter4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public BoxScoreTeamsCumulativePpaOverall withTotal(Double total) {
        this.total = total;
        return this;
    }
}