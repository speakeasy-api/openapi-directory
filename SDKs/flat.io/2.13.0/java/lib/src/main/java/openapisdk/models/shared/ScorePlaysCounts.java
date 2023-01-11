package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScorePlaysCounts
 * A computed version of the total, weekly, and monthly number of plays of
 * the score
 * 
**/
public class ScorePlaysCounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly")
    public Double monthly;
    public ScorePlaysCounts withMonthly(Double monthly) {
        this.monthly = monthly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScorePlaysCounts withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly")
    public Double weekly;
    public ScorePlaysCounts withWeekly(Double weekly) {
        this.weekly = weekly;
        return this;
    }
}