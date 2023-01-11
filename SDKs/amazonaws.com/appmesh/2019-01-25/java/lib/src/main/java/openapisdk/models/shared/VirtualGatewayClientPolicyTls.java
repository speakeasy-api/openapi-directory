package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayClientPolicyTls
 * An object that represents a Transport Layer Security (TLS) client policy.
**/
public class VirtualGatewayClientPolicyTls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public VirtualGatewayClientTlsCertificate certificate;
    public VirtualGatewayClientPolicyTls withCertificate(VirtualGatewayClientTlsCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce")
    public Boolean enforce;
    public VirtualGatewayClientPolicyTls withEnforce(Boolean enforce) {
        this.enforce = enforce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public Long[] ports;
    public VirtualGatewayClientPolicyTls withPorts(Long[] ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("validation")
    public VirtualGatewayTlsValidationContext validation;
    public VirtualGatewayClientPolicyTls withValidation(VirtualGatewayTlsValidationContext validation) {
        this.validation = validation;
        return this;
    }
}