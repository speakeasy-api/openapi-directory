package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleAByEmployer {
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleAByEmployer withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleAByEmployer withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleAByEmployer withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonProperty("employer")
    public String employer;
    public ScheduleAByEmployer withEmployer(String employer) {
        this.employer = employer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleAByEmployer withTotal(Double total) {
        this.total = total;
        return this;
    }
}