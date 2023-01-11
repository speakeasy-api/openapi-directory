package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleBByPurpose {
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleBByPurpose withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleBByPurpose withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleBByPurpose withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_count")
    public Integer memoCount;
    public ScheduleBByPurpose withMemoCount(Integer memoCount) {
        this.memoCount = memoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_total")
    public Double memoTotal;
    public ScheduleBByPurpose withMemoTotal(Double memoTotal) {
        this.memoTotal = memoTotal;
        return this;
    }
    @JsonProperty("purpose")
    public String purpose;
    public ScheduleBByPurpose withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleBByPurpose withTotal(Double total) {
        this.total = total;
        return this;
    }
}