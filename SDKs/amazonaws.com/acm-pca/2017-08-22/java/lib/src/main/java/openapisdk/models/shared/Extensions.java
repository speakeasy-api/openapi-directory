package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Extensions
 * Contains X.509 extension information for a certificate.
**/
public class Extensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificatePolicies")
    public PolicyInformation[] certificatePolicies;
    public Extensions withCertificatePolicies(PolicyInformation[] certificatePolicies) {
        this.certificatePolicies = certificatePolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedKeyUsage")
    public ExtendedKeyUsage[] extendedKeyUsage;
    public Extensions withExtendedKeyUsage(ExtendedKeyUsage[] extendedKeyUsage) {
        this.extendedKeyUsage = extendedKeyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyUsage")
    public KeyUsage keyUsage;
    public Extensions withKeyUsage(KeyUsage keyUsage) {
        this.keyUsage = keyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubjectAlternativeNames")
    public GeneralName[] subjectAlternativeNames;
    public Extensions withSubjectAlternativeNames(GeneralName[] subjectAlternativeNames) {
        this.subjectAlternativeNames = subjectAlternativeNames;
        return this;
    }
}