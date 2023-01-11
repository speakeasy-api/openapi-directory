package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrustedAdvisorCheckResult
 * The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
**/
public class TrustedAdvisorCheckResult {
    @JsonProperty("categorySpecificSummary")
    public TrustedAdvisorCategorySpecificSummary categorySpecificSummary;
    public TrustedAdvisorCheckResult withCategorySpecificSummary(TrustedAdvisorCategorySpecificSummary categorySpecificSummary) {
        this.categorySpecificSummary = categorySpecificSummary;
        return this;
    }
    @JsonProperty("checkId")
    public String checkId;
    public TrustedAdvisorCheckResult withCheckId(String checkId) {
        this.checkId = checkId;
        return this;
    }
    @JsonProperty("flaggedResources")
    public TrustedAdvisorResourceDetail[] flaggedResources;
    public TrustedAdvisorCheckResult withFlaggedResources(TrustedAdvisorResourceDetail[] flaggedResources) {
        this.flaggedResources = flaggedResources;
        return this;
    }
    @JsonProperty("resourcesSummary")
    public TrustedAdvisorResourcesSummary resourcesSummary;
    public TrustedAdvisorCheckResult withResourcesSummary(TrustedAdvisorResourcesSummary resourcesSummary) {
        this.resourcesSummary = resourcesSummary;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public TrustedAdvisorCheckResult withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("timestamp")
    public String timestamp;
    public TrustedAdvisorCheckResult withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}