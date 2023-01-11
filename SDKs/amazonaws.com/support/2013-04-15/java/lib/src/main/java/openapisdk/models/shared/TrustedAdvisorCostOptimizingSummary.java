package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrustedAdvisorCostOptimizingSummary
 * The estimated cost savings that might be realized if the recommended operations are taken.
**/
public class TrustedAdvisorCostOptimizingSummary {
    @JsonProperty("estimatedMonthlySavings")
    public Double estimatedMonthlySavings;
    public TrustedAdvisorCostOptimizingSummary withEstimatedMonthlySavings(Double estimatedMonthlySavings) {
        this.estimatedMonthlySavings = estimatedMonthlySavings;
        return this;
    }
    @JsonProperty("estimatedPercentMonthlySavings")
    public Double estimatedPercentMonthlySavings;
    public TrustedAdvisorCostOptimizingSummary withEstimatedPercentMonthlySavings(Double estimatedPercentMonthlySavings) {
        this.estimatedPercentMonthlySavings = estimatedPercentMonthlySavings;
        return this;
    }
}