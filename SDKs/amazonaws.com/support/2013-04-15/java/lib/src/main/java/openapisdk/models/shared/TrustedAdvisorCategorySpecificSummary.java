package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrustedAdvisorCategorySpecificSummary
 * The container for summary information that relates to the category of the Trusted Advisor check.
**/
public class TrustedAdvisorCategorySpecificSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costOptimizing")
    public TrustedAdvisorCostOptimizingSummary costOptimizing;
    public TrustedAdvisorCategorySpecificSummary withCostOptimizing(TrustedAdvisorCostOptimizingSummary costOptimizing) {
        this.costOptimizing = costOptimizing;
        return this;
    }
}