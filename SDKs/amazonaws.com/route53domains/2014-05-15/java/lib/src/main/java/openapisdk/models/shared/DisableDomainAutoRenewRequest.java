package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableDomainAutoRenewRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public DisableDomainAutoRenewRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}