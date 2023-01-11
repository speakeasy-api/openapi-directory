package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnableDomainAutoRenewRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public EnableDomainAutoRenewRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}