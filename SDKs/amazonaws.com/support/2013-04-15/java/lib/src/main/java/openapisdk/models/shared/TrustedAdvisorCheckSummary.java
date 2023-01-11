package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrustedAdvisorCheckSummary
 * A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
**/
public class TrustedAdvisorCheckSummary {
    @JsonProperty("categorySpecificSummary")
    public TrustedAdvisorCategorySpecificSummary categorySpecificSummary;
    public TrustedAdvisorCheckSummary withCategorySpecificSummary(TrustedAdvisorCategorySpecificSummary categorySpecificSummary) {
        this.categorySpecificSummary = categorySpecificSummary;
        return this;
    }
    @JsonProperty("checkId")
    public String checkId;
    public TrustedAdvisorCheckSummary withCheckId(String checkId) {
        this.checkId = checkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasFlaggedResources")
    public Boolean hasFlaggedResources;
    public TrustedAdvisorCheckSummary withHasFlaggedResources(Boolean hasFlaggedResources) {
        this.hasFlaggedResources = hasFlaggedResources;
        return this;
    }
    @JsonProperty("resourcesSummary")
    public TrustedAdvisorResourcesSummary resourcesSummary;
    public TrustedAdvisorCheckSummary withResourcesSummary(TrustedAdvisorResourcesSummary resourcesSummary) {
        this.resourcesSummary = resourcesSummary;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public TrustedAdvisorCheckSummary withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("timestamp")
    public String timestamp;
    public TrustedAdvisorCheckSummary withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}