package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResendContactReachabilityEmailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public ResendContactReachabilityEmailResponse withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public ResendContactReachabilityEmailResponse withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAlreadyVerified")
    public Boolean isAlreadyVerified;
    public ResendContactReachabilityEmailResponse withIsAlreadyVerified(Boolean isAlreadyVerified) {
        this.isAlreadyVerified = isAlreadyVerified;
        return this;
    }
}