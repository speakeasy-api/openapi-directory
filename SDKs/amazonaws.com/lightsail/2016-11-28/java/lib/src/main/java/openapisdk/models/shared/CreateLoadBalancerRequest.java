package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLoadBalancerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAlternativeNames")
    public String[] certificateAlternativeNames;
    public CreateLoadBalancerRequest withCertificateAlternativeNames(String[] certificateAlternativeNames) {
        this.certificateAlternativeNames = certificateAlternativeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateDomainName")
    public String certificateDomainName;
    public CreateLoadBalancerRequest withCertificateDomainName(String certificateDomainName) {
        this.certificateDomainName = certificateDomainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateName")
    public String certificateName;
    public CreateLoadBalancerRequest withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckPath")
    public String healthCheckPath;
    public CreateLoadBalancerRequest withHealthCheckPath(String healthCheckPath) {
        this.healthCheckPath = healthCheckPath;
        return this;
    }
    @JsonProperty("instancePort")
    public Long instancePort;
    public CreateLoadBalancerRequest withInstancePort(Long instancePort) {
        this.instancePort = instancePort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddressType")
    public IpAddressTypeEnum ipAddressType;
    public CreateLoadBalancerRequest withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public CreateLoadBalancerRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateLoadBalancerRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}