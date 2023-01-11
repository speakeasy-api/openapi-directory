package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TlsValidationContextFileTrust
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
**/
public class TlsValidationContextFileTrust {
    @JsonProperty("certificateChain")
    public String certificateChain;
    public TlsValidationContextFileTrust withCertificateChain(String certificateChain) {
        this.certificateChain = certificateChain;
        return this;
    }
}