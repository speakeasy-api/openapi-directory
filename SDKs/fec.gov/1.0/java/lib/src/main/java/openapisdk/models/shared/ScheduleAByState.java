package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleAByState {
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleAByState withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleAByState withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleAByState withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public ScheduleAByState withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("state_full")
    public String stateFull;
    public ScheduleAByState withStateFull(String stateFull) {
        this.stateFull = stateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleAByState withTotal(Double total) {
        this.total = total;
        return this;
    }
}