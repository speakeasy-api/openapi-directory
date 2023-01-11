package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsBillingUsage {
    @JsonProperty("included_minutes")
    public Long includedMinutes;
    public ActionsBillingUsage withIncludedMinutes(Long includedMinutes) {
        this.includedMinutes = includedMinutes;
        return this;
    }
    @JsonProperty("minutes_used_breakdown")
    public ActionsBillingUsageMinutesUsedBreakdown minutesUsedBreakdown;
    public ActionsBillingUsage withMinutesUsedBreakdown(ActionsBillingUsageMinutesUsedBreakdown minutesUsedBreakdown) {
        this.minutesUsedBreakdown = minutesUsedBreakdown;
        return this;
    }
    @JsonProperty("total_minutes_used")
    public Long totalMinutesUsed;
    public ActionsBillingUsage withTotalMinutesUsed(Long totalMinutesUsed) {
        this.totalMinutesUsed = totalMinutesUsed;
        return this;
    }
    @JsonProperty("total_paid_minutes_used")
    public Long totalPaidMinutesUsed;
    public ActionsBillingUsage withTotalPaidMinutesUsed(Long totalPaidMinutesUsed) {
        this.totalPaidMinutesUsed = totalPaidMinutesUsed;
        return this;
    }
}