package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DomainDetail
 * Contains details of a domain.
**/
public class DomainDetail {
    @JsonProperty("configuration")
    public DomainConfiguration configuration;
    public DomainDetail withConfiguration(DomainConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonProperty("domainInfo")
    public DomainInfo domainInfo;
    public DomainDetail withDomainInfo(DomainInfo domainInfo) {
        this.domainInfo = domainInfo;
        return this;
    }
}