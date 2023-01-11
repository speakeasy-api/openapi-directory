package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDomainResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public Domain domain;
    public GetDomainResult withDomain(Domain domain) {
        this.domain = domain;
        return this;
    }
}