package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualGatewayTlsValidationContextAcmTrust
 * An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
**/
public class VirtualGatewayTlsValidationContextAcmTrust {
    @JsonProperty("certificateAuthorityArns")
    public String[] certificateAuthorityArns;
    public VirtualGatewayTlsValidationContextAcmTrust withCertificateAuthorityArns(String[] certificateAuthorityArns) {
        this.certificateAuthorityArns = certificateAuthorityArns;
        return this;
    }
}