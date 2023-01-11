package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeTrustedAdvisorCheckResultResponse
 * The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.
**/
public class DescribeTrustedAdvisorCheckResultResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public TrustedAdvisorCheckResult result;
    public DescribeTrustedAdvisorCheckResultResponse withResult(TrustedAdvisorCheckResult result) {
        this.result = result;
        return this;
    }
}