package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
 * An object specifying a forwarding rule for a load balancer.
**/
public class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_id")
    public String certificateId;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonProperty("entry_port")
    public Long entryPort;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withEntryPort(Long entryPort) {
        this.entryPort = entryPort;
        return this;
    }
    @JsonProperty("entry_protocol")
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum entryProtocol;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withEntryProtocol(CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum entryProtocol) {
        this.entryProtocol = entryProtocol;
        return this;
    }
    @JsonProperty("target_port")
    public Long targetPort;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withTargetPort(Long targetPort) {
        this.targetPort = targetPort;
        return this;
    }
    @JsonProperty("target_protocol")
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum targetProtocol;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withTargetProtocol(CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum targetProtocol) {
        this.targetProtocol = targetProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls_passthrough")
    public Boolean tlsPassthrough;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withTlsPassthrough(Boolean tlsPassthrough) {
        this.tlsPassthrough = tlsPassthrough;
        return this;
    }
}