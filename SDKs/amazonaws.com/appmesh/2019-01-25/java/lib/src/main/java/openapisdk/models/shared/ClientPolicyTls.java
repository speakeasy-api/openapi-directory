package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientPolicyTls
 * A reference to an object that represents a Transport Layer Security (TLS) client policy.
**/
public class ClientPolicyTls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public ClientTlsCertificate certificate;
    public ClientPolicyTls withCertificate(ClientTlsCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce")
    public Boolean enforce;
    public ClientPolicyTls withEnforce(Boolean enforce) {
        this.enforce = enforce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public Long[] ports;
    public ClientPolicyTls withPorts(Long[] ports) {
        this.ports = ports;
        return this;
    }
    @JsonProperty("validation")
    public TlsValidationContext validation;
    public ClientPolicyTls withValidation(TlsValidationContext validation) {
        this.validation = validation;
        return this;
    }
}