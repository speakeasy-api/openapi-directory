package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListenerTlsValidationContext
 * An object that represents a listener's Transport Layer Security (TLS) validation context.
**/
public class ListenerTlsValidationContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectAlternativeNames")
    public SubjectAlternativeNames subjectAlternativeNames;
    public ListenerTlsValidationContext withSubjectAlternativeNames(SubjectAlternativeNames subjectAlternativeNames) {
        this.subjectAlternativeNames = subjectAlternativeNames;
        return this;
    }
    @JsonProperty("trust")
    public ListenerTlsValidationContextTrust trust;
    public ListenerTlsValidationContext withTrust(ListenerTlsValidationContextTrust trust) {
        this.trust = trust;
        return this;
    }
}