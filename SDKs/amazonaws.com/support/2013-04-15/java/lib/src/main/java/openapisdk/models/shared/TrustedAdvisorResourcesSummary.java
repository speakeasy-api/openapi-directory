package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrustedAdvisorResourcesSummary
 * Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
**/
public class TrustedAdvisorResourcesSummary {
    @JsonProperty("resourcesFlagged")
    public Long resourcesFlagged;
    public TrustedAdvisorResourcesSummary withResourcesFlagged(Long resourcesFlagged) {
        this.resourcesFlagged = resourcesFlagged;
        return this;
    }
    @JsonProperty("resourcesIgnored")
    public Long resourcesIgnored;
    public TrustedAdvisorResourcesSummary withResourcesIgnored(Long resourcesIgnored) {
        this.resourcesIgnored = resourcesIgnored;
        return this;
    }
    @JsonProperty("resourcesProcessed")
    public Long resourcesProcessed;
    public TrustedAdvisorResourcesSummary withResourcesProcessed(Long resourcesProcessed) {
        this.resourcesProcessed = resourcesProcessed;
        return this;
    }
    @JsonProperty("resourcesSuppressed")
    public Long resourcesSuppressed;
    public TrustedAdvisorResourcesSummary withResourcesSuppressed(Long resourcesSuppressed) {
        this.resourcesSuppressed = resourcesSuppressed;
        return this;
    }
}