package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachLoadBalancerTlsCertificateRequest {
    @JsonProperty("certificateName")
    public String certificateName;
    public AttachLoadBalancerTlsCertificateRequest withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public AttachLoadBalancerTlsCertificateRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
}