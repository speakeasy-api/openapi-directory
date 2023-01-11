package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLoadBalancerTlsCertificateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAlternativeNames")
    public String[] certificateAlternativeNames;
    public CreateLoadBalancerTlsCertificateRequest withCertificateAlternativeNames(String[] certificateAlternativeNames) {
        this.certificateAlternativeNames = certificateAlternativeNames;
        return this;
    }
    @JsonProperty("certificateDomainName")
    public String certificateDomainName;
    public CreateLoadBalancerTlsCertificateRequest withCertificateDomainName(String certificateDomainName) {
        this.certificateDomainName = certificateDomainName;
        return this;
    }
    @JsonProperty("certificateName")
    public String certificateName;
    public CreateLoadBalancerTlsCertificateRequest withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public CreateLoadBalancerTlsCertificateRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateLoadBalancerTlsCertificateRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}