package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteLoadBalancerTlsCertificateRequest {
    @JsonProperty("certificateName")
    public String certificateName;
    public DeleteLoadBalancerTlsCertificateRequest withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public DeleteLoadBalancerTlsCertificateRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public DeleteLoadBalancerTlsCertificateRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
}