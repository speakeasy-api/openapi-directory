package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDomainDetailRequest
 * The GetDomainDetail request includes the following element.
**/
public class GetDomainDetailRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public GetDomainDetailRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}