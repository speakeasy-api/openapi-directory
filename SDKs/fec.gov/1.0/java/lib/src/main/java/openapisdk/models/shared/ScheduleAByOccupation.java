package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleAByOccupation {
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleAByOccupation withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleAByOccupation withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleAByOccupation withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonProperty("occupation")
    public String occupation;
    public ScheduleAByOccupation withOccupation(String occupation) {
        this.occupation = occupation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleAByOccupation withTotal(Double total) {
        this.total = total;
        return this;
    }
}