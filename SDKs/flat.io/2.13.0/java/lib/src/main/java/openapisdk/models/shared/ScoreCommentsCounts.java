package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreCommentsCounts
 * A computed version of the total, unique, weekly and monthly number of
 * comments added on the documents (this doesn't include inline comments).
 * 
**/
public class ScoreCommentsCounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly")
    public Double monthly;
    public ScoreCommentsCounts withMonthly(Double monthly) {
        this.monthly = monthly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScoreCommentsCounts withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique")
    public Double unique;
    public ScoreCommentsCounts withUnique(Double unique) {
        this.unique = unique;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly")
    public Double weekly;
    public ScoreCommentsCounts withWeekly(Double weekly) {
        this.weekly = weekly;
        return this;
    }
}