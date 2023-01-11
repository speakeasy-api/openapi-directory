package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TlsValidationContext
 * An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
**/
public class TlsValidationContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectAlternativeNames")
    public SubjectAlternativeNames subjectAlternativeNames;
    public TlsValidationContext withSubjectAlternativeNames(SubjectAlternativeNames subjectAlternativeNames) {
        this.subjectAlternativeNames = subjectAlternativeNames;
        return this;
    }
    @JsonProperty("trust")
    public TlsValidationContextTrust trust;
    public TlsValidationContext withTrust(TlsValidationContextTrust trust) {
        this.trust = trust;
        return this;
    }
}