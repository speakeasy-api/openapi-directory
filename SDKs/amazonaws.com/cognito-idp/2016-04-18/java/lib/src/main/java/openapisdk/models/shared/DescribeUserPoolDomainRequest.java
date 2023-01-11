package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeUserPoolDomainRequest {
    @JsonProperty("Domain")
    public String domain;
    public DescribeUserPoolDomainRequest withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}