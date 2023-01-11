package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PackagesBillingUsage {
    @JsonProperty("included_gigabytes_bandwidth")
    public Long includedGigabytesBandwidth;
    public PackagesBillingUsage withIncludedGigabytesBandwidth(Long includedGigabytesBandwidth) {
        this.includedGigabytesBandwidth = includedGigabytesBandwidth;
        return this;
    }
    @JsonProperty("total_gigabytes_bandwidth_used")
    public Long totalGigabytesBandwidthUsed;
    public PackagesBillingUsage withTotalGigabytesBandwidthUsed(Long totalGigabytesBandwidthUsed) {
        this.totalGigabytesBandwidthUsed = totalGigabytesBandwidthUsed;
        return this;
    }
    @JsonProperty("total_paid_gigabytes_bandwidth_used")
    public Long totalPaidGigabytesBandwidthUsed;
    public PackagesBillingUsage withTotalPaidGigabytesBandwidthUsed(Long totalPaidGigabytesBandwidthUsed) {
        this.totalPaidGigabytesBandwidthUsed = totalPaidGigabytesBandwidthUsed;
        return this;
    }
}