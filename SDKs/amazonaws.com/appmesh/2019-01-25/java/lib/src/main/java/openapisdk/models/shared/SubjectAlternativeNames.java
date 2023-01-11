package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubjectAlternativeNames
 * An object that represents the subject alternative names secured by the certificate.
**/
public class SubjectAlternativeNames {
    @JsonProperty("match")
    public SubjectAlternativeNameMatchers match;
    public SubjectAlternativeNames withMatch(SubjectAlternativeNameMatchers match) {
        this.match = match;
        return this;
    }
}