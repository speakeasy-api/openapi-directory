package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleABySize {
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleABySize withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleABySize withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleABySize withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonProperty("size")
    public Integer size;
    public ScheduleABySize withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleABySize withTotal(Double total) {
        this.total = total;
        return this;
    }
}