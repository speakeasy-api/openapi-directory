package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResendContactReachabilityEmailRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public ResendContactReachabilityEmailRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}