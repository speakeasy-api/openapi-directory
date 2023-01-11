package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateCustomDomainResponse {
    @JsonProperty("CustomDomain")
    public CustomDomain customDomain;
    public DisassociateCustomDomainResponse withCustomDomain(CustomDomain customDomain) {
        this.customDomain = customDomain;
        return this;
    }
    @JsonProperty("DNSTarget")
    public String dnsTarget;
    public DisassociateCustomDomainResponse withDnsTarget(String dnsTarget) {
        this.dnsTarget = dnsTarget;
        return this;
    }
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public DisassociateCustomDomainResponse withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}