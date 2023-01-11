package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreViewsCounts
 * A computed version of the total, weekly, and monthly number of views of
 * the score
 * 
**/
public class ScoreViewsCounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly")
    public Double monthly;
    public ScoreViewsCounts withMonthly(Double monthly) {
        this.monthly = monthly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScoreViewsCounts withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly")
    public Double weekly;
    public ScoreViewsCounts withWeekly(Double weekly) {
        this.weekly = weekly;
        return this;
    }
}