package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancerTlsCertificatesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsCertificates")
    public LoadBalancerTlsCertificate[] tlsCertificates;
    public GetLoadBalancerTlsCertificatesResult withTlsCertificates(LoadBalancerTlsCertificate[] tlsCertificates) {
        this.tlsCertificates = tlsCertificates;
        return this;
    }
}