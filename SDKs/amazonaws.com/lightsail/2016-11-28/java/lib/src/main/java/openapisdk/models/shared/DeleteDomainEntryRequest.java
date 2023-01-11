package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDomainEntryRequest {
    @JsonProperty("domainEntry")
    public DomainEntry domainEntry;
    public DeleteDomainEntryRequest withDomainEntry(DomainEntry domainEntry) {
        this.domainEntry = domainEntry;
        return this;
    }
    @JsonProperty("domainName")
    public String domainName;
    public DeleteDomainEntryRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}