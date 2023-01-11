package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrustedAdvisorCheckRefreshStatus
 * The refresh status of a Trusted Advisor check.
**/
public class TrustedAdvisorCheckRefreshStatus {
    @JsonProperty("checkId")
    public String checkId;
    public TrustedAdvisorCheckRefreshStatus withCheckId(String checkId) {
        this.checkId = checkId;
        return this;
    }
    @JsonProperty("millisUntilNextRefreshable")
    public Long millisUntilNextRefreshable;
    public TrustedAdvisorCheckRefreshStatus withMillisUntilNextRefreshable(Long millisUntilNextRefreshable) {
        this.millisUntilNextRefreshable = millisUntilNextRefreshable;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public TrustedAdvisorCheckRefreshStatus withStatus(String status) {
        this.status = status;
        return this;
    }
}