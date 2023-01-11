package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateCustomDomainRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public DisassociateCustomDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public DisassociateCustomDomainRequest withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}