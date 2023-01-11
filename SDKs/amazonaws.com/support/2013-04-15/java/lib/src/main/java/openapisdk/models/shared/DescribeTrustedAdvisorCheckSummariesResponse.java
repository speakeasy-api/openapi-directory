package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeTrustedAdvisorCheckSummariesResponse
 * The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
**/
public class DescribeTrustedAdvisorCheckSummariesResponse {
    @JsonProperty("summaries")
    public TrustedAdvisorCheckSummary[] summaries;
    public DescribeTrustedAdvisorCheckSummariesResponse withSummaries(TrustedAdvisorCheckSummary[] summaries) {
        this.summaries = summaries;
        return this;
    }
}