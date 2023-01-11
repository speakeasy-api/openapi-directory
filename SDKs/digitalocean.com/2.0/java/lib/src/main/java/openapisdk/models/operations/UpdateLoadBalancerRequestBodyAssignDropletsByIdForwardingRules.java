package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules
 * An object specifying a forwarding rule for a load balancer.
**/
public class UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_id")
    public String certificateId;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonProperty("entry_port")
    public Long entryPort;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withEntryPort(Long entryPort) {
        this.entryPort = entryPort;
        return this;
    }
    @JsonProperty("entry_protocol")
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum entryProtocol;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withEntryProtocol(UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum entryProtocol) {
        this.entryProtocol = entryProtocol;
        return this;
    }
    @JsonProperty("target_port")
    public Long targetPort;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withTargetPort(Long targetPort) {
        this.targetPort = targetPort;
        return this;
    }
    @JsonProperty("target_protocol")
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum targetProtocol;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withTargetProtocol(UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum targetProtocol) {
        this.targetProtocol = targetProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls_passthrough")
    public Boolean tlsPassthrough;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules withTlsPassthrough(Boolean tlsPassthrough) {
        this.tlsPassthrough = tlsPassthrough;
        return this;
    }
}