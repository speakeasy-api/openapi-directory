package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommitActivity
 * Commit Activity
**/
public class CommitActivity {
    @JsonProperty("days")
    public Long[] days;
    public CommitActivity withDays(Long[] days) {
        this.days = days;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public CommitActivity withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonProperty("week")
    public Long week;
    public CommitActivity withWeek(Long week) {
        this.week = week;
        return this;
    }
}