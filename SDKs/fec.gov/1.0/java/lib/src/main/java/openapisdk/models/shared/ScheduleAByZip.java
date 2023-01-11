package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleAByZip {
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleAByZip withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleAByZip withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleAByZip withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public ScheduleAByZip withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_full")
    public String stateFull;
    public ScheduleAByZip withStateFull(String stateFull) {
        this.stateFull = stateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleAByZip withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("zip")
    public String zip;
    public ScheduleAByZip withZip(String zip) {
        this.zip = zip;
        return this;
    }
}