package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules
 * An object specifying a forwarding rule for a load balancer.
**/
public class CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_id")
    public String certificateId;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonProperty("entry_port")
    public Long entryPort;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withEntryPort(Long entryPort) {
        this.entryPort = entryPort;
        return this;
    }
    @JsonProperty("entry_protocol")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum entryProtocol;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withEntryProtocol(CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum entryProtocol) {
        this.entryProtocol = entryProtocol;
        return this;
    }
    @JsonProperty("target_port")
    public Long targetPort;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withTargetPort(Long targetPort) {
        this.targetPort = targetPort;
        return this;
    }
    @JsonProperty("target_protocol")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum targetProtocol;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withTargetProtocol(CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum targetProtocol) {
        this.targetProtocol = targetProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls_passthrough")
    public Boolean tlsPassthrough;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withTlsPassthrough(Boolean tlsPassthrough) {
        this.tlsPassthrough = tlsPassthrough;
        return this;
    }
}