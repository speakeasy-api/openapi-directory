package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleAByStateRecipientTotals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type")
    public String committeeType;
    public ScheduleAByStateRecipientTotals withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type_full")
    public String committeeTypeFull;
    public ScheduleAByStateRecipientTotals withCommitteeTypeFull(String committeeTypeFull) {
        this.committeeTypeFull = committeeTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleAByStateRecipientTotals withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleAByStateRecipientTotals withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public ScheduleAByStateRecipientTotals withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_full")
    public String stateFull;
    public ScheduleAByStateRecipientTotals withStateFull(String stateFull) {
        this.stateFull = stateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleAByStateRecipientTotals withTotal(Double total) {
        this.total = total;
        return this;
    }
}