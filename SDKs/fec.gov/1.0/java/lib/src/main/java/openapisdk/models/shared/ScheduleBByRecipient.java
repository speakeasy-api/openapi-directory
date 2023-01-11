package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleBByRecipient {
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleBByRecipient withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleBByRecipient withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleBByRecipient withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_count")
    public Integer memoCount;
    public ScheduleBByRecipient withMemoCount(Integer memoCount) {
        this.memoCount = memoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_total")
    public Double memoTotal;
    public ScheduleBByRecipient withMemoTotal(Double memoTotal) {
        this.memoTotal = memoTotal;
        return this;
    }
    @JsonProperty("recipient_name")
    public String recipientName;
    public ScheduleBByRecipient withRecipientName(String recipientName) {
        this.recipientName = recipientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleBByRecipient withTotal(Double total) {
        this.total = total;
        return this;
    }
}