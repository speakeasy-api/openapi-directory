package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
 * An object specifying a forwarding rule for a load balancer.
**/
public class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_id")
    public String certificateId;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonProperty("entry_port")
    public Long entryPort;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withEntryPort(Long entryPort) {
        this.entryPort = entryPort;
        return this;
    }
    @JsonProperty("entry_protocol")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum entryProtocol;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withEntryProtocol(UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum entryProtocol) {
        this.entryProtocol = entryProtocol;
        return this;
    }
    @JsonProperty("target_port")
    public Long targetPort;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withTargetPort(Long targetPort) {
        this.targetPort = targetPort;
        return this;
    }
    @JsonProperty("target_protocol")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum targetProtocol;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withTargetProtocol(UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum targetProtocol) {
        this.targetProtocol = targetProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls_passthrough")
    public Boolean tlsPassthrough;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules withTlsPassthrough(Boolean tlsPassthrough) {
        this.tlsPassthrough = tlsPassthrough;
        return this;
    }
}