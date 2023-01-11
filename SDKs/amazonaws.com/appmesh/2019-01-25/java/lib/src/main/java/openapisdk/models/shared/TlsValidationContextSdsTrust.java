package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TlsValidationContextSdsTrust
 * An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.
**/
public class TlsValidationContextSdsTrust {
    @JsonProperty("secretName")
    public String secretName;
    public TlsValidationContextSdsTrust withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}