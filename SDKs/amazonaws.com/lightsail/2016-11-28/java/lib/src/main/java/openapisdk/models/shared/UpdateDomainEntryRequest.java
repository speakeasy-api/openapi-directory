package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDomainEntryRequest {
    @JsonProperty("domainEntry")
    public DomainEntry domainEntry;
    public UpdateDomainEntryRequest withDomainEntry(DomainEntry domainEntry) {
        this.domainEntry = domainEntry;
        return this;
    }
    @JsonProperty("domainName")
    public String domainName;
    public UpdateDomainEntryRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}