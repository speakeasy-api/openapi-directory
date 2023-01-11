package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeTrustedAdvisorCheckRefreshStatusesResponse
 * The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
**/
public class DescribeTrustedAdvisorCheckRefreshStatusesResponse {
    @JsonProperty("statuses")
    public TrustedAdvisorCheckRefreshStatus[] statuses;
    public DescribeTrustedAdvisorCheckRefreshStatusesResponse withStatuses(TrustedAdvisorCheckRefreshStatus[] statuses) {
        this.statuses = statuses;
        return this;
    }
}