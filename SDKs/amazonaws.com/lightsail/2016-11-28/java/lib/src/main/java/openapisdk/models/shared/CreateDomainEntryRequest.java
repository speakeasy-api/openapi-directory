package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDomainEntryRequest {
    @JsonProperty("domainEntry")
    public DomainEntry domainEntry;
    public CreateDomainEntryRequest withDomainEntry(DomainEntry domainEntry) {
        this.domainEntry = domainEntry;
        return this;
    }
    @JsonProperty("domainName")
    public String domainName;
    public CreateDomainEntryRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}