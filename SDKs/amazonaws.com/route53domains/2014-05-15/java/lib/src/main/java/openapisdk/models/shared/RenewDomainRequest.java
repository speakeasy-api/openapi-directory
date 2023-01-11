package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RenewDomainRequest
 * A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.
**/
public class RenewDomainRequest {
    @JsonProperty("CurrentExpiryYear")
    public Long currentExpiryYear;
    public RenewDomainRequest withCurrentExpiryYear(Long currentExpiryYear) {
        this.currentExpiryYear = currentExpiryYear;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public RenewDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationInYears")
    public Long durationInYears;
    public RenewDomainRequest withDurationInYears(Long durationInYears) {
        this.durationInYears = durationInYears;
        return this;
    }
}