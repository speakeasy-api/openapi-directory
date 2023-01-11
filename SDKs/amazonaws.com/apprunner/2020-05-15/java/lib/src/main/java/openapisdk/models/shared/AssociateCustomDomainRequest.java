package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateCustomDomainRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public AssociateCustomDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableWWWSubdomain")
    public Boolean enableWWWSubdomain;
    public AssociateCustomDomainRequest withEnableWwwSubdomain(Boolean enableWWWSubdomain) {
        this.enableWWWSubdomain = enableWWWSubdomain;
        return this;
    }
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public AssociateCustomDomainRequest withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}