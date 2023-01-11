package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreLikesCounts
 * A computed version of the weekly, monthly and total of number of likes
 * for a score
 * 
**/
public class ScoreLikesCounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly")
    public Double monthly;
    public ScoreLikesCounts withMonthly(Double monthly) {
        this.monthly = monthly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScoreLikesCounts withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly")
    public Double weekly;
    public ScoreLikesCounts withWeekly(Double weekly) {
        this.weekly = weekly;
        return this;
    }
}