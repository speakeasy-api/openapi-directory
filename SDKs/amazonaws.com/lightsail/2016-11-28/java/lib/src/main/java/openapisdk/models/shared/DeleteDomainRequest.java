package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDomainRequest {
    @JsonProperty("domainName")
    public String domainName;
    public DeleteDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}