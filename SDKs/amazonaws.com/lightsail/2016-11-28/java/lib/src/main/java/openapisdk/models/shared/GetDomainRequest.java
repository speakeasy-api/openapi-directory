package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDomainRequest {
    @JsonProperty("domainName")
    public String domainName;
    public GetDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}