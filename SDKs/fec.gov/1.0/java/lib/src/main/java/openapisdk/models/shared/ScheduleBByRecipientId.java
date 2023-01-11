package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleBByRecipientId {
    @JsonProperty("committee_id")
    public String committeeId;
    public ScheduleBByRecipientId withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public ScheduleBByRecipientId withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public ScheduleBByRecipientId withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public ScheduleBByRecipientId withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_count")
    public Integer memoCount;
    public ScheduleBByRecipientId withMemoCount(Integer memoCount) {
        this.memoCount = memoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo_total")
    public Double memoTotal;
    public ScheduleBByRecipientId withMemoTotal(Double memoTotal) {
        this.memoTotal = memoTotal;
        return this;
    }
    @JsonProperty("recipient_id")
    public String recipientId;
    public ScheduleBByRecipientId withRecipientId(String recipientId) {
        this.recipientId = recipientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipient_name")
    public String recipientName;
    public ScheduleBByRecipientId withRecipientName(String recipientName) {
        this.recipientName = recipientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ScheduleBByRecipientId withTotal(Double total) {
        this.total = total;
        return this;
    }
}