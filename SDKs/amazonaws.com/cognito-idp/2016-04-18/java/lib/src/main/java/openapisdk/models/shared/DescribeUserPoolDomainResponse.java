package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeUserPoolDomainResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainDescription")
    public DomainDescriptionType domainDescription;
    public DescribeUserPoolDomainResponse withDomainDescription(DomainDescriptionType domainDescription) {
        this.domainDescription = domainDescription;
        return this;
    }
}