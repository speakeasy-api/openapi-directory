package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListenerTls
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
**/
public class ListenerTls {
    @JsonProperty("certificate")
    public ListenerTlsCertificate certificate;
    public ListenerTls withCertificate(ListenerTlsCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("mode")
    public ListenerTlsModeEnum mode;
    public ListenerTls withMode(ListenerTlsModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validation")
    public ListenerTlsValidationContext validation;
    public ListenerTls withValidation(ListenerTlsValidationContext validation) {
        this.validation = validation;
        return this;
    }
}