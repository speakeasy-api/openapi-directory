package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainInfos
 * Contains a paginated collection of DomainInfo structures.
**/
public class DomainInfos {
    @JsonProperty("domainInfos")
    public DomainInfo[] domainInfos;
    public DomainInfos withDomainInfos(DomainInfo[] domainInfos) {
        this.domainInfos = domainInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public DomainInfos withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}