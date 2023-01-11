package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules
 * An object specifying a forwarding rule for a load balancer.
**/
public class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_id")
    public String certificateId;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonProperty("entry_port")
    public Long entryPort;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules withEntryPort(Long entryPort) {
        this.entryPort = entryPort;
        return this;
    }
    @JsonProperty("entry_protocol")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum entryProtocol;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules withEntryProtocol(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum entryProtocol) {
        this.entryProtocol = entryProtocol;
        return this;
    }
    @JsonProperty("target_port")
    public Long targetPort;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules withTargetPort(Long targetPort) {
        this.targetPort = targetPort;
        return this;
    }
    @JsonProperty("target_protocol")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum targetProtocol;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules withTargetProtocol(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum targetProtocol) {
        this.targetProtocol = targetProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls_passthrough")
    public Boolean tlsPassthrough;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules withTlsPassthrough(Boolean tlsPassthrough) {
        this.tlsPassthrough = tlsPassthrough;
        return this;
    }
}