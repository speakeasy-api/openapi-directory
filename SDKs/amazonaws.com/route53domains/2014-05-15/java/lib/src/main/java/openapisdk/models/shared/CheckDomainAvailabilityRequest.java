package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckDomainAvailabilityRequest
 * The CheckDomainAvailability request contains the following elements.
**/
public class CheckDomainAvailabilityRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public CheckDomainAvailabilityRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdnLangCode")
    public String idnLangCode;
    public CheckDomainAvailabilityRequest withIdnLangCode(String idnLangCode) {
        this.idnLangCode = idnLangCode;
        return this;
    }
}