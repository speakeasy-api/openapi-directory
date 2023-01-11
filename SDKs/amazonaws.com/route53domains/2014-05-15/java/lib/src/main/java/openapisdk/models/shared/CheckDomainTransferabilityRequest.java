package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckDomainTransferabilityRequest
 * The CheckDomainTransferability request contains the following elements.
**/
public class CheckDomainTransferabilityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthCode")
    public String authCode;
    public CheckDomainTransferabilityRequest withAuthCode(String authCode) {
        this.authCode = authCode;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public CheckDomainTransferabilityRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}