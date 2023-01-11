package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListenerTlsValidationContextTrust
 * An object that represents a listener's Transport Layer Security (TLS) validation context trust.
**/
public class ListenerTlsValidationContextTrust {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public TlsValidationContextFileTrust file;
    public ListenerTlsValidationContextTrust withFile(TlsValidationContextFileTrust file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sds")
    public TlsValidationContextSdsTrust sds;
    public ListenerTlsValidationContextTrust withSds(TlsValidationContextSdsTrust sds) {
        this.sds = sds;
        return this;
    }
}