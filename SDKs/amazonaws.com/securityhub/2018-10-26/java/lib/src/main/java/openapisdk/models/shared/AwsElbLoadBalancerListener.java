package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerListener
 * Information about a load balancer listener.
**/
public class AwsElbLoadBalancerListener {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstancePort")
    public Long instancePort;
    public AwsElbLoadBalancerListener withInstancePort(Long instancePort) {
        this.instancePort = instancePort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceProtocol")
    public String instanceProtocol;
    public AwsElbLoadBalancerListener withInstanceProtocol(String instanceProtocol) {
        this.instanceProtocol = instanceProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoadBalancerPort")
    public Long loadBalancerPort;
    public AwsElbLoadBalancerListener withLoadBalancerPort(Long loadBalancerPort) {
        this.loadBalancerPort = loadBalancerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public String protocol;
    public AwsElbLoadBalancerListener withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SslCertificateId")
    public String sslCertificateId;
    public AwsElbLoadBalancerListener withSslCertificateId(String sslCertificateId) {
        this.sslCertificateId = sslCertificateId;
        return this;
    }
}