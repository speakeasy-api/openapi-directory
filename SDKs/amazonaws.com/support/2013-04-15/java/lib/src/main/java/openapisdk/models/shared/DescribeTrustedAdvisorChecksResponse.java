package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeTrustedAdvisorChecksResponse
 * Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
**/
public class DescribeTrustedAdvisorChecksResponse {
    @JsonProperty("checks")
    public TrustedAdvisorCheckDescription[] checks;
    public DescribeTrustedAdvisorChecksResponse withChecks(TrustedAdvisorCheckDescription[] checks) {
        this.checks = checks;
        return this;
    }
}