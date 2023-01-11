package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayListenerTls
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
**/
public class VirtualGatewayListenerTls {
    @JsonProperty("certificate")
    public VirtualGatewayListenerTlsCertificate certificate;
    public VirtualGatewayListenerTls withCertificate(VirtualGatewayListenerTlsCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("mode")
    public VirtualGatewayListenerTlsModeEnum mode;
    public VirtualGatewayListenerTls withMode(VirtualGatewayListenerTlsModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validation")
    public VirtualGatewayListenerTlsValidationContext validation;
    public VirtualGatewayListenerTls withValidation(VirtualGatewayListenerTlsValidationContext validation) {
        this.validation = validation;
        return this;
    }
}