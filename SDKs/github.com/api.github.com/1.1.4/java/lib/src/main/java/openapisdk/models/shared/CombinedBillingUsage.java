package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CombinedBillingUsage {
    @JsonProperty("days_left_in_billing_cycle")
    public Long daysLeftInBillingCycle;
    public CombinedBillingUsage withDaysLeftInBillingCycle(Long daysLeftInBillingCycle) {
        this.daysLeftInBillingCycle = daysLeftInBillingCycle;
        return this;
    }
    @JsonProperty("estimated_paid_storage_for_month")
    public Long estimatedPaidStorageForMonth;
    public CombinedBillingUsage withEstimatedPaidStorageForMonth(Long estimatedPaidStorageForMonth) {
        this.estimatedPaidStorageForMonth = estimatedPaidStorageForMonth;
        return this;
    }
    @JsonProperty("estimated_storage_for_month")
    public Long estimatedStorageForMonth;
    public CombinedBillingUsage withEstimatedStorageForMonth(Long estimatedStorageForMonth) {
        this.estimatedStorageForMonth = estimatedStorageForMonth;
        return this;
    }
}