package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TlsValidationContextTrust
 * An object that represents a Transport Layer Security (TLS) validation context trust.
**/
public class TlsValidationContextTrust {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acm")
    public TlsValidationContextAcmTrust acm;
    public TlsValidationContextTrust withAcm(TlsValidationContextAcmTrust acm) {
        this.acm = acm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public TlsValidationContextFileTrust file;
    public TlsValidationContextTrust withFile(TlsValidationContextFileTrust file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sds")
    public TlsValidationContextSdsTrust sds;
    public TlsValidationContextTrust withSds(TlsValidationContextSdsTrust sds) {
        this.sds = sds;
        return this;
    }
}