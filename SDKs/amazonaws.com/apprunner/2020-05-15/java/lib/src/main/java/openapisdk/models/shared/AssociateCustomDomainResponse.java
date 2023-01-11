package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateCustomDomainResponse {
    @JsonProperty("CustomDomain")
    public CustomDomain customDomain;
    public AssociateCustomDomainResponse withCustomDomain(CustomDomain customDomain) {
        this.customDomain = customDomain;
        return this;
    }
    @JsonProperty("DNSTarget")
    public String dnsTarget;
    public AssociateCustomDomainResponse withDnsTarget(String dnsTarget) {
        this.dnsTarget = dnsTarget;
        return this;
    }
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public AssociateCustomDomainResponse withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}